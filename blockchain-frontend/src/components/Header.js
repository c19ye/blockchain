import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = (props) => {
  const { basket } = props;

  const totalBasketPrice = basket.reduce((total, product) => total + product.price, 0);


  return (
    <>
      <header className="header-upper py-3">
        <div className="row">
          <div className="col-2">
            <h2 style={{}}>
              <Link className="text-white"> BlockChain</Link>
            </h2>
          </div>
          <div className="col-4">
            <div className="input-group">
              <input
                type="text"
                className="form-control py-2"
                placeholder="Buradan Ürün Arayabilirsin..."
                aria-label="Buradan Ürün Arayabilirsin..."
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text p-3" id="basic-addon2">
                <BsSearch className="fs-6" />
              </span>
            </div>
          </div>
          <div className="col-6">
            <div className="header-upper-links d-flex align-items-center ">
              <div className="col-10 d-flex justify-content-between">
              <div>
                <Link
                  to="#"
                  className="d-flex align-items-center gap-10 text-white"
                >
                  <img src="images/compare.svg" alt="compare" />
                  <p className="mb-0">
                    Ürün <br /> Karşilaştir
                  </p>
                </Link>
              </div>
              <div>
                <Link
                  to="#"
                  className="d-flex align-items-center gap-10 text-white"
                >
                  <img src="images/wishlist.svg" alt="wishlist" />
                  <p className="mb-0">
                    Favori <br /> Listesi
                  </p>
                </Link>
              </div>
              <div >
                <Link
                  to="#"
                  className="d-flex align-items-center gap-10 text-white"
                >
                  <img src="images/user.svg" alt="user" />
                  <p className="mb-0">
                    Hesaba <br /> Giriş Yap
                  </p>
                </Link>
              </div>
              <div className="d-flex align-items-center gap-10">
                <Link
                  to="/cart"
                  state={{ basket: basket }}
                  className="d-flex align-items-center gap-10 text-white"
                >
                  <img src="images/cart.svg" alt="cart" />
                  <div className="d-flex flex-column gap-10">
                    <span className="badge bg-white text-dark">
                      {basket.length}
                    </span>{" "}
                    {/* Sepetteki ürün sayısı */}
                    <p className="mb-0">TL {totalBasketPrice.toFixed(2)}</p>
                  </div>
                </Link>
              </div>
              </div>
              <div className="col-2">

              </div>
             
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="col-12">
            <div className="menu-bottom d-flex align-items-center gap-30">
              <div>
                <div className="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="images/menu.svg" alt="" />
                    <span className="me-5 d-inline-block">
                      Mağaza Kategorileri
                    </span>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="dropdown-item text-white" to="">
                        Elektronik
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="">
                        Çevre Birimleri
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-white" to="">
                        Yazılım/Donanım
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menu-links">
                <div className="d-flex align-items-center gap-15">
                  <NavLink to="/">Anasayfa</NavLink>
                  <NavLink to="#">Mağazam</NavLink>
                  <NavLink to="#">Blog</NavLink>
                  <NavLink to="#">Iletişim</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
