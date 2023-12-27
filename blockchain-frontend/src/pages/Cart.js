import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";
import Web3 from "web3";
const web3 = new Web3(Web3.givenProvider);

const Cart = () => {
  const location = useLocation();
  const { basket } = location.state;

  const [productQuantities, setProductQuantities] = useState(
    basket.reduce((acc, product) => {
      acc[product.id] = 1; // varsayılan olarak her üründen 1 adet
      return acc;
    }, {})
  );

  // Toplam ücreti hesaplayan fonksiyon
  const calculateTotalAmount = () => {
    return Object.keys(productQuantities).reduce((acc, productId) => {
      productId = parseInt(productId);
      const product = basket.find((item) => item.id === productId);
      console.log("dasf", basket);
      const quantity = productQuantities[productId];
      const x = acc + product.price * quantity;
      const y = product.price * quantity;
      product.total = y;
      product.quantity = quantity;
      console.log("dsadsa", x);
      return x;
    }, 0);
  };

  // Adet değişikliğinde tetiklenecek fonksiyon
  const handleQuantityChange = (productId, quantity) => {
    setProductQuantities({
      ...productQuantities,
      [productId]: quantity,
    });
    console.log("baskettt", basket);
  };

  const totalAmount = calculateTotalAmount();

  const address = "0xB9Ad7E136766de4ECd136bff52fF0fA1b1D58784";
  const abi = [
    {
      inputs: [],
      name: "getstore",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_store",
          type: "string",
        },
      ],
      name: "setstore",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "store",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];
  const init = async (pinContent) => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        console.log("Ethereum provider connected!");
        await interactWithContract(pinContent);
      } else {
        alert("Install MetaMask extension!!");
      }
    } catch (error) {
      console.error("Error connecting to Ethereum provider:", error);
    }
  };

  const interactWithContract = async (pinContent) => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      console.log("Accounts:", accounts);

      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(abi, address);

      // Set the name in the smart contract
      await contract.methods.setstore(pinContent).send({ from: accounts[0] });
    } catch (error) {
      console.error("Error interacting with contract:", error);
    }
  };

  // const getStoredName = async () => {
  //   try {

  //     const web3 = new Web3(window.ethereum);
  //     const contract = new web3.eth.Contract(abi, address);

  //     // Get the stored name from the smart contract
  //     const storedName = await contract.methods.getName().call();
  //     setStoredName(storedName);
  //   } catch (error) {
  //     console.error("Error getting stored name:", error);
  //   }
  // };

  const buyProduct = async () => {
    console.log("baskettt", basket);
    console.log("productQuantities", productQuantities);
    // {
    //   "id": 0,
    //   "product_name": "string",
    //   "number_of_product": 0,
    //   "product_id": 0,
    //   "total_price": 0
    // }

    // id
    // :
    // 3
    // imageUrl
    // :
    // "https://www.casper.com.tr/uploads/2022/06/215-cspe215-c215f-monitor-3-9_op.webp"
    // name
    // :
    // "Casper Monitör 21.5 Inc"
    // price
    // :
    // 7000
    // quantity
    // :
    // 1
    // shadowUrl
    // :
    // "https://akn-ayb.a-cdn.akinoncdn.com/products/2023/02/06/2290338/e917f624-4342-455f-b297-328f2942ffbf_size780x780_quality60_cropCenter.jpg"
    // stock
    // :
    // 7
    // total
    // :
    // 7000
    try {
      for (const product of basket) {
        // Prepare the data for the POST request
        const orderData = {
          product_name: product.name,
          number_of_product: product.quantity,
          product_id: product.id,
          total_price: product.total,
        };

        // Send a POST request using Axios
        const response = await axios.post(
          "https://localhost:7174/api/Cart",
          orderData
        );
        init(response.data);

        // Handle the response if needed (you can log it)
        console.log("Order placed successfully:", response.data);

        // Add the order to the orders array
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header basket={basket} />
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />

      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Ürün Resmi</th>
                  <th>Ürün İsmi</th>
                  <th>Fiyat</th>
                </tr>
              </thead>
              <tbody>
                {basket.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={product.imageUrl}
                        className="img-fluid"
                        alt="product"
                        width={100}
                        height={100}
                      />
                    </td>
                    <td>{product.name}</td>

                    <td>{product.price} TL</td>
                    <td>
                      <div className="cart-col-3 d-flex align-items-center gap-15">
                        <div>
                          <input
                            type="number"
                            className="form-control"
                            min={1}
                            max={10}
                            value={productQuantities[product.id] || 1}
                            onChange={(e) =>
                              handleQuantityChange(
                                product.id,
                                parseInt(e.target.value)
                              )
                            }
                          />
                        </div>
                        <div>
                          <AiFillDelete className="text-danger" />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-12 py-2">
            <div className="d-flex justify-content-end">
              <h4>Toplam Fiyat: {totalAmount.toFixed(2)} TL </h4>{" "}
              {/* Display total price */}
            </div>
            <p className="text-end">Vergiler ve Kargo ödemeleri hesaplandı.</p>

            <button className="button float-end" onClick={buyProduct}>
              Ödeme
            </button>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Cart;
