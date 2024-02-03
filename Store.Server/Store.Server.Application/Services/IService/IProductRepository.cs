using Store.Server.Domain.Entities;

namespace Store.Server.Application.Services.IService
{
    public interface IProductRepository
    {
        Task<List<Product>>GetProductsAsync();
        Task<Product> GetProduct(Guid productId);
    }
}
