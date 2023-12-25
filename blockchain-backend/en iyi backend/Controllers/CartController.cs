using en_iyi_backend.Data;
using Microsoft.AspNetCore.Mvc;
using en_iyi_backend.Model;
using System.Text;
using System;
using System.IO;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using System.Threading.Tasks;
using Nethereum.Web3;
using Nethereum.Web3.Accounts.Managed;
using Nethereum.Contracts;
using Nethereum.Hex.HexTypes;


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
               Console.WriteLine ( pinCartContent);
               

                //// Read file
                //byte[] fileBytes = await System.IO.File.ReadAllBytesAsync("./ethereum.jpg");
                //ByteArrayContent fileContent = new ByteArrayContent(fileBytes);

                // Test JWT Authentication
                HttpResponseMessage testResponse = await httpClient.GetAsync("https://api.pinata.cloud/data/testAuthentication");
                string testContent = await testResponse.Content.ReadAsStringAsync();
                Console.WriteLine(testContent);

                Web3(pinCartContent);

                // Define NFT Metadata
                /*var nftMetadata = new
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
                Console.WriteLine(pinNFTContent); */

                // Add cart to database
                _datacontext.Carts.Add(cart);
                _datacontext.SaveChanges();

                return new JsonResult(Ok(cart));
            }
        }
        public async void Web3(string pinContent)
        {
            string mnemonic = "luxury,cable,fog,govern,wealth,amazing,window,diary,sample,trophhy,veteran,bulk";
            string infuraurl = "https://sepolia.infura.io/v3/6c2806217b0d45f1a5d48756c50debb3";

            var account = new ManagedAccount(mnemonic,infuraurl);
            var web3 = new Web3(account);

            var accounts = await web3.Eth.Accounts.SendRequestAsync();
            Console.WriteLine("accounts: " + string.Join(", ", accounts));

            var balance = await web3.Eth.GetBalance.SendRequestAsync(accounts[0]);
            Console.WriteLine("balance: " + balance);

            var contractaddress = "0xB9Ad7E136766de4ECd136bff52fF0fA1b1D58784";
            var contractabi = "[\r\n\t{\r\n\t\t\"inputs\": [],\r\n\t\t\"name\": \"getstore\",\r\n\t\t\"outputs\": [\r\n\t\t\t{\r\n\t\t\t\t\"internalType\": \"string\",\r\n\t\t\t\t\"name\": \"\",\r\n\t\t\t\t\"type\": \"string\"\r\n\t\t\t}\r\n\t\t],\r\n\t\t\"stateMutability\": \"view\",\r\n\t\t\"type\": \"function\"\r\n\t},\r\n\t{\r\n\t\t\"inputs\": [\r\n\t\t\t{\r\n\t\t\t\t\"internalType\": \"string\",\r\n\t\t\t\t\"name\": \"_store\",\r\n\t\t\t\t\"type\": \"string\"\r\n\t\t\t}\r\n\t\t],\r\n\t\t\"name\": \"setstore\",\r\n\t\t\"outputs\": [],\r\n\t\t\"stateMutability\": \"nonpayable\",\r\n\t\t\"type\": \"function\"\r\n\t},\r\n\t{\r\n\t\t\"inputs\": [],\r\n\t\t\"name\": \"store\",\r\n\t\t\"outputs\": [\r\n\t\t\t{\r\n\t\t\t\t\"internalType\": \"string\",\r\n\t\t\t\t\"name\": \"\",\r\n\t\t\t\t\"type\": \"string\"\r\n\t\t\t}\r\n\t\t],\r\n\t\t\"stateMutability\": \"view\",\r\n\t\t\"type\": \"function\"\r\n\t}\r\n]";
            // replace with your contract abı
            var contract = web3.Eth.GetContract(contractabi, contractaddress);

            var retrievefunction = contract.GetFunction("getstore");
            var value = await retrievefunction.CallAsync<uint>();
            Console.WriteLine("retrieved value: " + value);

            var storefunction = contract.GetFunction("store");
            // var transactionınput = storefunction.CreateTransactionInput(accounts[0], new Hex.HexTypes.HexBigInteger(90000), new Hex.HexTypes.HexBigInteger(0), new Hex.HexTypes.HexBigInteger(4));
            var transactionInput = contract.GetFunction("setstore")
            .CreateTransactionInput(accounts[0], pinContent);
           
           
            var transactionhash = await web3.Eth.Transactions.SendTransaction.SendRequestAsync(transactionInput);
            Console.WriteLine("transaction hash: " + transactionhash);

            Console.WriteLine("done");
        }
        [HttpGet("GetAll")]
        public JsonResult GetAll()
        {
            var result = _datacontext.Carts.ToList();
            return new JsonResult(Ok(result));
        }
    }
}

