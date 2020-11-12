using BusinessNews.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessNews.services
{
    public interface INewsService
    {
        List<News> GetAll();
        News Get(int id);
        void Add(News newNews);
        void Update(int id, News news);
        void Delete(int id);
    }
}
