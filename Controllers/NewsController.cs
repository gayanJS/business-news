using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BusinessNewsReact.Models;
using BusinessNewsReact.Services;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace BusinessNewsReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly BusinessDBContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public NewsController(BusinessDBContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnvironment = hostEnvironment;
        }


        // GET: api/Employee
        [HttpGet]
        public async Task<ActionResult<IEnumerable<News>>> GetNews()
        {
            return await _context.News
                .Select(x => new News()
                {
                    Id = x.Id,
                    Description = x.Description,
                  Author=x.Author,
                    Title = x.Title,
                    ImageName = x.ImageName,
                    UrlToImage = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.ImageName)
                })
                .ToListAsync();
        }

        // GET: api/News/5
        [HttpGet("{id}")]
        public async Task<ActionResult<News>> GetNews(int id)
        {
            var news = await _context.News.FindAsync(id);

            if (news == null)
            {
                return NotFound();
            }

            return news;
        }

        // PUT: api/News/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNews(int id, News news)
        {
            if (id != news.Id)
            {
                return BadRequest();
            }

            _context.Entry(news).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NewsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/News
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<News>> PostNews([FromForm] News news)
        {
            news.ImageName=await SaveImage(news.ImageFile);
            if (news.ImageFile != null)

            {
                if (news.ImageFile.Length > 0)

                //Convert Image to byte and save to database

                {

                    byte[] p1 = null;
                    using (var fs1 = news.ImageFile.OpenReadStream())
                    using (var ms1 = new MemoryStream())
                    {
                        fs1.CopyTo(ms1);
                        p1 = ms1.ToArray();
                    }
                    news.Img = p1;

                }
            }
            _context.News.Add(news);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNews", new { id = news.Id }, news);
        }

        // DELETE: api/News/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<News>> DeleteNews(int id)
        {
            var news = await _context.News.FindAsync(id);
            if (news == null)
            {
                return NotFound();
            } 
            DeleteImage(news.ImageName);
            _context.News.Remove(news);
            await _context.SaveChangesAsync();

            return news;
        }

        private bool NewsExists(int id)
        {
            return _context.News.Any(e => e.Id == id);
        }

        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }

        [NonAction]
        public void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            if (System.IO.File.Exists(imagePath))
                System.IO.File.Delete(imagePath);
        }

    }
}
