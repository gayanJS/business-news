using FizzWare.NBuilder.Dates;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace BusinessNewsReact.Models
{
    public class UserRegistrationModel
    {
        public string Name { get; set; }
      
        [Required(ErrorMessage = "Email is Required")]
        [EmailAddress]
        public string Email { get; set; }
        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "The password and confirmation password do not Match.")]
        public string ConfirmPassword { get; set; }
    }
}
