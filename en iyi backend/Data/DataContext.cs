using en_iyi_backend.Model;
using Microsoft.EntityFrameworkCore;

namespace en_iyi_backend.Data
{


    public class DataContext : DbContext
    {
        public DbSet<Product> Products { get; set; }

        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
        }
    }
}

