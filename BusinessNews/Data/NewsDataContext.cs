using BusinessNews.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace BusinessNews.Data
{
    public class NewsDataContext : DbContext
    {
        public NewsDataContext(DbContextOptions<NewsDataContext> options) : base(options)
        {

        }
        public DbSet<RegiUser> RegiUser { get; set; }
        public DbSet<News> News { get; set; }
        public DbSet<Author> Author { get; set; }
    }
}
