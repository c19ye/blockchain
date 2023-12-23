import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid, product,updateState } = props;
  let location = useLocation();

  const [star, setStar] = useState(3);
 

  useEffect(() => {
    const randomStar = () => {
      const numbers = [1, 2, 3, 4, 5];
      const randomIndex = Math.floor(Math.random() * numbers.length);
      setStar(numbers[randomIndex]);
    };
    randomStar();
  }, [star]);

  const addToBasket = () => {
    updateState(product)

  };

  return (
    <>
      <div
        className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src="images/wish.svg" alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src={product.imageUrl}
              className="img-fluid"
              alt="product image"
            />
            <img
              src={product.shadowUrl}
              className="img-fluid"
              alt="product image"
            />
          </div>
          <div className="product-details">
            <h5 className="product-title">{product.name}</h5>
            <ReactStars
              count={5}
              size={24}
              value={star}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              JBL Tune 510BT Multi Connect kablosuz kulaklik Pure Bass sesi,
              yumuşacik ve rahat yastiklari, ideal tasarimi ve güçlü Bluetooth
              5.0 bağlanti akişi ile burada karşinizda. Siz de gün içinde eller
              serbest sesli ya da görüntülü görüşme deneyimi yaşamak ve müziği
              en kaliteli seslerle hissetmek istiyorsaniz alabilirsiniz.
            </p>
            <p className="price">{product.price} TL</p>
            <div className="center-button">
            <button className="button border-0" type="button" onClick={addToBasket}>
                Sepete Ekle
              </button>
         
            </div>
          </div>

          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src="images/prodcompare.svg" alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/view.svg" alt="view" />
              </button>
              <button className="border-0 bg-transparent">
                <img src="images/add-cart.svg" alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
