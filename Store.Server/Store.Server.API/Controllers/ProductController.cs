using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Store.Server.Application.Services.IService;
using Store.Server.Domain.Entities;

namespace Store.Server.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _repo;
        private readonly ILogger<ProductController> _logger;
        public ProductController(IProductRepository repo, ILogger<ProductController> logger)
        {
            _repo = repo;
            _logger = logger;
        }

        [HttpGet]
        [ResponseCache(Duration =30)]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            try
            {
                var data= await _repo.GetProductsAsync();
                if (data.Any())
                {
                    return data;
                }
                _logger.LogError("No products are available");
                return BadRequest();

            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occured while retrieving the list of products");
                return null;
            }
        }

        [HttpGet]
        [Route("{productId:guid}",Name = "GetProduct")]
        public async Task<ActionResult<Product>> GetProduct(Guid productId)
        {
            try 
            {
                if (productId.ToString() != null)
                {
                    var data = await _repo.GetProduct(productId);
                    if (data == null)
                    {
                        _logger.LogError($"Product is not availabe with id :{productId}");
                        return BadRequest($"Product is not availabe with id :{productId}");
                    }
                    return data;
                }
                _logger.LogError("Please provide a product Id");
                return BadRequest("Please provide a product Id");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"An error occured while retrieving the product with id : {productId}");
                return null;
            }

        }

    }
}
