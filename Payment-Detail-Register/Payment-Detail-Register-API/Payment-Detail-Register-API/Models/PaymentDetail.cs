using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Payment_Detail_Register_API.Models
{
    public class PaymentDetail
    {
        [Key]
        //[Column(Order = 1)]
        public int PMId { get; set; }
        [Required]
        [Column (TypeName = "nvarchar(100)")]
        public string CardOwnerName { get; set; }
        [Required]
        [Column (TypeName ="varchar(16)")]
        public string CardNumber { get; set; }
        [Required]
        [Column(TypeName = "varchar(5)")]
        public string ExpirationDate { get; set; }
        [Required]
        [Column(TypeName = "varchar(3)")]
        public string CVV { get; set; }
    }
}
