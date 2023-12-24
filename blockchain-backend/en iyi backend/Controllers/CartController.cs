using en_iyi_backend.Data;
using Microsoft.AspNetCore.Mvc;
using en_iyi_backend.Model;
using System.Text;
using System;
using System.IO;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

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
        public async Task<JsonResult> addCart(Cart cart)
        {
            // Setup HttpClient
            using (HttpClient httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Add("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI3ZmFiZWEwZC1jMWY1LTRmNjMtODM0Ni0xOGM5NzkxNTIwZjgiLCJlbWFpbCI6Inluc2VtcmVhcnNsbjIzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJjMWNjNjk1NWFlYzViYTY3MzQwZSIsInNjb3BlZEtleVNlY3JldCI6ImVjMTg2N2Y2ZDk2MzUyNTUyMmExODMzYzgwMTI5NzcyZTYxNWNlNmRiNjcxMDBiYzEzMzhlMGRjYzZiMDQ4ZjQiLCJpYXQiOjE3MDM0NDUxNTJ9.5iCPGIcMu86RAJBAOF0EGUNr7PDZF6Z6vyUiFb4qswQ"); // Replace with your actual JWT token

                // Convert Cart object to JSON string
                string cartJson = JsonSerializer.Serialize(cart);
                StringContent cartContent = new StringContent(cartJson, Encoding.UTF8, "application/json");

                // Pin the serialized Cart object to IPFS via Pinata
                HttpResponseMessage pinCartResponse = await httpClient.PostAsync("https://api.pinata.cloud/pinning/pinJSONToIPFS", cartContent);
                string pinCartContent = await pinCartResponse.Content.ReadAsStringAsync();
                Console.WriteLine(pinCartContent);

                //// Read file
                //byte[] fileBytes = await System.IO.File.ReadAllBytesAsync("./ethereum.jpg");
                //ByteArrayContent fileContent = new ByteArrayContent(fileBytes);

                // Test JWT Authentication
                HttpResponseMessage testResponse = await httpClient.GetAsync("https://api.pinata.cloud/data/testAuthentication");
                string testContent = await testResponse.Content.ReadAsStringAsync();
                Console.WriteLine(testContent);

               

                // Define NFT Metadata
                var nftMetadata = new
                {
                    name = "Our NFT",
                    description = "Our very first NFT.",
                    image = "ipfs://QmTgiZZ27voapy2u1f8eEzydporN4pgDRrGoFzvk6dRYkd"
                };

                string nftMetadataJson = JsonSerializer.Serialize(nftMetadata);
                StringContent nftContent = new StringContent(nftMetadataJson, Encoding.UTF8, "application/json");

                // Upload NFT Metadata to IPFS via Pinata
                HttpResponseMessage pinNFTResponse = await httpClient.PostAsync("https://api.pinata.cloud/pinning/pinJSONToIPFS", nftContent);
                string pinNFTContent = await pinNFTResponse.Content.ReadAsStringAsync();
                Console.WriteLine(pinNFTContent);

                // Add cart to database
                _datacontext.Carts.Add(cart);
                _datacontext.SaveChanges();

                return new JsonResult(Ok(cart));
            }
        }

        [HttpGet("GetAll")]
        public JsonResult GetAll()
        {
            var result = _datacontext.Carts.ToList();
            return new JsonResult(Ok(result));
        }
    }
}
