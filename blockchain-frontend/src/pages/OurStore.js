import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";
import axios from "axios";
import { useEffect } from "react";
import Footer from '../components/Footer';
import Header from '../components/Header';

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [flag,setFlag] = useState(false);


  const updateState = (newvalue) => {
    setBasket((prevBasket) => {
      // Check if the product is already in the basket
      const isProductInBasket = prevBasket.some((product) => product.id === newvalue.id);
  
      if (!isProductInBasket) {
        return [...prevBasket, newvalue];
      }
  
      return prevBasket; // If the product is already in the basket, return the current basket unchanged
    });
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7174/api/Product/GetAll"
        );
        setProducts(response.data.value);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData().then(() => {
      console.log("Products fetched and updated::", products);
    });
  }, []);

  return (
    <>
      <Header basket = {basket}/>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Kategorilere Göre Ürünler</h3>
              <div>
                <ul className="ps-0">
                  <li>Saat</li>
                  <li>Televizyon</li>
                  <li>Kamera</li>
                  <li>Bilgisayar</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h5 className="filter-title">Filtre</h5>
              <div>
                <h5 className="sub-title">Mevcut Olma</h5>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="" />
                  <label className="form-check-label" htmlFor="">
                    Stokta Mevcut (1)
                  </label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="" />
                  <label className="form-check-label" htmlFor="">
                    Stoklar Tükendi (0)
                  </label>
                </div>
              </div>
              <h5 className="filter-title">Fiyat</h5>
              <div className="d-flex align-items-center gap-10">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="From"
                  />
                  <label htmlFor="floatingInput">Min</label>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput1"
                    placeholder="To"
                  />
                  <label htmlFor="floatingInput1">Max</label>
                </div>
              </div>
              <h5 className="filter-title">Renk</h5>
              <div>
                <Color />
              </div>
              <h5 className="filter-title">Boyut</h5>
              <div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="color-1"
                  />
                  <label className="form-check-label" htmlFor="color-1">
                    S (2)
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="color-2"
                  />
                  <label className="form-check-label" htmlFor="color-2">
                    M (4)
                  </label>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Ürün Etiketi</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Kulaklik
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobil
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Kablosuz
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Rastgele Ürünler</h3>
              <div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="images/jbl.webp"
                      className="img-fluid"
                      alt="speaker"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Go 3 inanilmaz derecede büyük ses ve güçlü bas sunar.
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>TL 950</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch3.png"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Hafif özellikteki alüminyum kasa, uzay endüstrisi
                      standarti.{" "}
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>TL 1150</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Göre Sirala:
                  </p>
                  <select name="" className="form-control form-select" id="">
                    <option value="manual">Öne Çikanlar</option>
                    <option value="best-selling" selected="selected">
                      Çok Satanlar
                    </option>
                    <option value="title-ascending">Alfabetik , A-Z</option>
                    <option value="title-descending">TersAlfabetik, Z-A</option>
                    <option value="price-ascending">
                      Fiyat, düşükten yükseğe
                    </option>
                    <option value="price-descending">
                      Fiyat, yüksekten düşüğe
                    </option>
                    <option value="created-ascending">
                      Tarih, eskiden yeniye
                    </option>
                    <option value="created-descending">
                      Tarih, yeniden eskiye
                    </option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">{products.length} Ürün</p>
                  
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                {products.map((product, index) => (
                  <ProductCard updateState={updateState} key={index} product={product} grid={grid} />
                  
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />

    </>
  );
};

export default OurStore;
