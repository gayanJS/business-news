using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessNews.Models
{
    public class News
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public string Title { get; set; }
        public string Date { get; set; }
    }
}