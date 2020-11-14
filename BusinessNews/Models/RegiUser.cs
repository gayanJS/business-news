using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using DocumentFormat.OpenXml.Office2010.Excel;

namespace BusinessNews.Models
{
    public class RegiUser
    {
        [key]
        public int Id  { get; set; }
        public string Email_id { get; set; }
        public string Password { get; set; }
       
    }
}
