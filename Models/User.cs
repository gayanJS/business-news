using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessNewsReact.Models
{
    public class User:IdentityUser
    {
        //[Key]
        //public int Id { get; set; }
        public string Name { get; set; }
      
        public Author Author { get; set; }
      
       public Reader Reader { get; set; }
    }
}