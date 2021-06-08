using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace BusinessNewsReact.Models
{
    public class News
    {
        [Key]
        public int Id { get; set; }

        
        public string Description { get; set; }
       
       
        public string Title { get; set; }

        public string Author { get; set; }
        
       
        public string Date { get; set; }

       

        public string ImageName { get; set; }
        
        [NotMapped]
        public IFormFile ImageFile { get; set; }

        public byte[] Img { get; set; }
        public string UrlToImage { get; set; }
        //public Author Author { get; set; }
        public ICollection<Reader> Readers { get; set; }

       
    }
}