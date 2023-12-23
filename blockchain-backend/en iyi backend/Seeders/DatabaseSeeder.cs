using en_iyi_backend.Data;
using en_iyi_backend.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace en_iyi_backend.Seeders
{
    public static class DatabaseSeeder
    {
        public static void SeedData(DataContext dataContext)
        {
            SeedProduct(dataContext, "Monster Notebook", "https://cdn.dsmcdn.com/mnresize/500/-/ty955/product/media/images/20230622/10/387989782/971623074/1/1_org.jpg", "https://cdn.cimri.io/image/480x480/monster-abra-a7-v72-laptop-notebook_52809233.jpg", 5, 15000);

            SeedProduct(dataContext, "IPhone 11", "https://cdn03.ciceksepeti.com/cicek/kc6263204-1/L/iphone-11-64gb-black-cep-telefonu-kc6263204-1-939761a05bce4275ab08652f05359a05.jpg", "https://cdn03.ciceksepeti.com/cicek/kc3238726-1/XL/apple-iphone-11-128-gb-apple-turkiye-garantili-kc3238726-1-9cae206c1b354784b59c2a8eae07e1c8.jpg", 10, 10000);

            SeedProduct(dataContext, "Casper Monitör 21.5 Inc", "https://www.casper.com.tr/uploads/2022/06/215-cspe215-c215f-monitor-3-9_op.webp", "https://akn-ayb.a-cdn.akinoncdn.com/products/2023/02/06/2290338/e917f624-4342-455f-b297-328f2942ffbf_size780x780_quality60_cropCenter.jpg", 7, 7000);
        }

        private static void SeedProduct(DataContext dataContext, string name, string imageUrl, string shadowUrl, int stock, int price)
        {
            var existingProduct = dataContext.Products.SingleOrDefault(p => p.Name == name);

            if (existingProduct == null)
            {
                var newProduct = new Product
                {
                    Name = name,
                    ImageUrl = imageUrl,
                    ShadowUrl = shadowUrl,
                    Stock = stock,
                    Price = price
                };

                dataContext.Products.Add(newProduct);
                dataContext.SaveChanges();
            }
        }
    }
}
