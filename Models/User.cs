using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessNews.Models
{
    public class User
    { 
    [Key]
        public int Id { get; set; }

        [Required(ErrorMessage ="Email is Required")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is Required")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
       
       public Author Author { get; set; }
      
       public Reader Reader { get; set; }
    }
}