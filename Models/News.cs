using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessNews.Models
{
    public class News
    {[Key]
        public int Id { get; set; }

        public string Content { get; set; }
        public string Title { get; set; }
        public string Date { get; set; }
        public Author Author { get; set; }
        public ICollection<Reader> Readers { get; set; }
    }
}