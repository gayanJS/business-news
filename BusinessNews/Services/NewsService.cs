using BusinessNews.Data;
using BusinessNews.Models;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessNews.services
{
    public class NewsService : INewsService
    {
        private readonly NewsDataContext _dataContext;

        public NewsService(NewsDataContext newsDataContext)
        {
            _dataContext = newsDataContext;

        }

        public NewsService()
        {
        }

        public List<News> GetAll()
        {
            return _dataContext.Newss.ToList();

        }

        public News Get(int id)
        {

            return _dataContext.News.FirstOrDefault(news => news.Id== id);
        }

        public void Add(News newNews)
        {
            _dataContext.Newss.Add(newNews);
            _dataContext.SaveChanges();
        }

        public void Update(int id, News news)
        {

            _dataContext.Newss.Update(news);
            _dataContext.SaveChanges();
        }

        public void Delete(int id)
        {
            News news = Get(id);
            _dataContext.Newss.Remove(news);
            _dataContext.SaveChanges();
        }
    }
}
