using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessNews.Models
{
    public class News
    {
        [key]
        public int Id  { get; set; }
        public string Category { get; set; }
        public string Body { get; set; }
        public string Date { get; set; }
        public string Title { get; set; }
        
    }
}
