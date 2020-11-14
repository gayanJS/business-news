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
    public class AuthorController : ControllerBase
    {
        private readonly IAuthorService _authorService;
        public AuthorController(IAuthorService authorService)
        {
            _authorService = authorService;

        }


        [HttpGet]
        public IEnumerable<Author> Get()
        {
            return _authorService.GetAll();
        }



        [HttpGet("{id}")]
        public Author Get(int id)
        {
            return _authorService.Get(id);
        }

        [HttpPost]
        public void Post([FromBody] Author newAuthor)
        {

            _authorService.Add(newAuthor);
        }


        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Author author)
        {

            _authorService.Update(id, author);

        }


        [HttpDelete("{id}")]
        public void Delete(int id)
        {

            _authorService.Delete(id);
        }
    }
}

