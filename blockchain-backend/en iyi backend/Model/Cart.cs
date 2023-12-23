namespace en_iyi_backend.Model
{
    public class Cart
    {
        public int id { get; set; }
        public string Product_name { get; set; }
        public int Number_of_product { get; set; }
        public int product_id { get; set; }
        public int total_price { get; set; }
    }
}
