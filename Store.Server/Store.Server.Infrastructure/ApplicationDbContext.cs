using Microsoft.EntityFrameworkCore;
using Store.Server.Domain.Entities;

namespace Store.Server.Infrastructure
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext>options):base(options)
        {
            
        }
        public DbSet<Product> Products { get; set; }
    }
}
