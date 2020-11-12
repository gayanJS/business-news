using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Threading.Tasks;
using BusinessNews.Models;
using BusinessNews.services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BusinessNews.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly INewsService _newsService;
        public NewsController(INewsService newsService)
        {
            _newsService = newsService;

        }


        [HttpGet]
        public IEnumerable<News> Get()
        {
            return _newsService.GetAll();
        }



        [HttpGet("{id}")]
        public News Get(int id)
        {
            return _newsService.Get(id);
        }

        [HttpPost]
        public void Post([FromBody] News newNews)
        {

            _newsService.Add(newNews);
        }


        [HttpPut("{id}")]
        public void Put(int id, [FromBody] News news)
        {

            _newsService.Update(id, news);

        }


        [HttpDelete("{id}")]
        public void Delete(int id)
        {

            _newsService.Delete(id);
        }
    }
}

