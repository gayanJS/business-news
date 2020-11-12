using BusinessNews.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessNews.services
{
    public interface IAuthorService
    {
        List<AuthorService> GetAll();
        AuthorService Get(int id);
        void Add(AuthorService newAuthor);
        void Update(int id, AuthorService author);
        void Delete(int id);
    }
}
