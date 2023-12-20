using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using en_iyi_backend.Data;
using en_iyi_backend.Model;
using Microsoft.EntityFrameworkCore;


namespace en_iyi_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly DataContext _datacontext;
        public ProductController(DataContext dataContext)
        {
            _datacontext = dataContext;
        }


        // Create/Edit
        [HttpPost]
        public JsonResult CreateEdit(Product product)
        {
           // if (product.Id == 0)
           // {
                _datacontext.Products.Add(product);
           // }
           // else
          //  {
                var productInDb = _datacontext.Products.Find(product.Id);

                if (productInDb == null)
                    return new JsonResult(NotFound());

                productInDb = product;
           // }

            _datacontext.SaveChanges();

            return new JsonResult(Ok(product));

        }
        [HttpGet]
        public JsonResult Get(int id)
        {
            var result = _datacontext.Products.Find(id);

            if (result == null)
                return new JsonResult(NotFound());

            return new JsonResult(Ok(result));
        }

        // Delete
        [HttpDelete]
        public JsonResult Delete(int id)
        {
            var result = _datacontext.Products.Find(id);

            if (result == null)
                return new JsonResult(NotFound());

            _datacontext.Products.Remove(result);
            _datacontext.SaveChanges();

            return new JsonResult(NoContent());
        }

        [HttpGet("GetAll")]
        public JsonResult GetAll()
        {
            var result = _datacontext.Products.ToList();

            return new JsonResult(Ok(result));
        }
    }
}
