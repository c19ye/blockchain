using en_iyi_backend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using en_iyi_backend.Model;

namespace en_iyi_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly DataContext _datacontext;
        public CartController(DataContext dataContext)
        {
            _datacontext = dataContext;
        }
        [HttpPost]
        public JsonResult addCart(Cart cart)
        {

            // if (cart.id == 0)
            // {
            _datacontext.Carts.Add(cart);
           // }
          //   else
           //  {
            var cartInDb = _datacontext.Carts.Find(cart.id);

            if (cartInDb == null)
                return new JsonResult(NotFound());

           cartInDb = cart;
           //  }

            _datacontext.SaveChanges();

            return new JsonResult(Ok(cart));

        }

    }
    }

