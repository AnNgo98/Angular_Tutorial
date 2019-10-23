using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyBankAccount_API.Models
{
    // DbContext là một cầu nối giữa lớp domain (code-first) hoặc thực thể (DB first or Model first) với CSDL của bạn.
    public class APIDBContext:DbContext
    {
        public APIDBContext(DbContextOptions<APIDBContext> options) : base(options)
        {

        }
        public DbSet<Bank> Banks { get; set; }
        public DbSet<BankAccount> BankAccounts { get; set; }
    }
}
