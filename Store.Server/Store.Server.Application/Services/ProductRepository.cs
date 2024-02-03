using Microsoft.EntityFrameworkCore;
using Store.Server.Application.Services.IService;
using Store.Server.Domain.DTO;
using Store.Server.Domain.Entities;
using Store.Server.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Store.Server.Application.Services
{
    
    public class ProductRepository : IProductRepository
    {
        private readonly ApplicationDbContext _db;
        public ProductRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        public async Task<Product> GetProduct(Guid productId)
        {
            var product = await _db.Products.FindAsync(productId);
            return product;

        }

        public async Task<List<Product>> GetProductsAsync()
        {
            var products=await _db.Products.ToListAsync();
            if (products.Any())
            {
                return products;
            }
            return null;
        }
    }
}
