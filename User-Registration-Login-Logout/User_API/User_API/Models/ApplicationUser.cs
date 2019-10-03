using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace User_API.Models
{
    public class ApplicationUser:IdentityUser
    {
        [Column(TypeName="nvarchar(150)")]
        public string FullName { get; set; }
        //public int UserID { get; set; }
        //public string UserName { get; set; }
        //public string Password { get; set; }
    }
   
}

