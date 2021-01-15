
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessNews.Models
{
    public class Reader
    {[Key]
        public int Id { get; set; }
        public ICollection<News> News { get; set; }
        public int UserForeignKey { get; set; }
        public User User { get; set; }
        
    }
}