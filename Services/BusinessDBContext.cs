using BusinessNewsReact.Models;


using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessNewsReact.Services
{
    public class BusinessDBContext : DbContext
    {
        public BusinessDBContext()
        {
        }

        public BusinessDBContext(DbContextOptions<BusinessDBContext> options)
 : base(options)
        {
        }
        public DbSet<Author> Authors { get; set; }
        public DbSet<News> News { get; set; }
        public DbSet<Reader> Readers { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfiguration(new RoleConfiguration());
            modelBuilder.Entity<IdentityUserRole<string>>().HasKey(p => new { p.UserId, p.RoleId });
        
        modelBuilder.Entity<Author>()
                .HasOne(b => b.User)
                .WithOne(i => i.Author)
                .HasForeignKey<Author>(b => b.UserForeignKey);

            modelBuilder.Entity<Reader>()
               .HasOne(b => b.User)
               .WithOne(i => i.Reader)
               .HasForeignKey<Reader>(b => b.UserForeignKey);
        }

    }
}
