using BusinessNews.Data;
using BusinessNews.Models;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessNews.services
{
    public class AuthorService : IAuthorService
    {
        private readonly NewsDataContext _dataContext;

        public AuthorService(NewsDataContext newsDataContext)
        {
            _dataContext = newsDataContext;

        }

        public AuthorService()
        {
        }

        public List<AuthorService> GetAll()
        {
            return _dataContext.Author.ToList();

        }

        public AuthorService Get(int id)
        {

            return _dataContext.Author.FirstOrDefault(author => author.Id == id);
        }

        public void Add(AuthorService newAuthor)
        {
            _dataContext.Authors.Add(newAuthor);
            _dataContext.SaveChanges();
        }

        public void Update(int id, AuthorService author)
        {

            _dataContext.Authors.Update(author);
            _dataContext.SaveChanges();
        }

        public void Delete(int id)
        {
            AuthorService author = Get(id);
            _dataContext.Authors.Remove(author);
            _dataContext.SaveChanges();
        }
    }
}
