import React from "react";
import { Link } from "react-router-dom";
import {IoMdArrowRoundBack} from "react-icons/io";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">a0e-web</h3>
                <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link className="text-dark total-price" to="/cart">Ürün Sepeti</Link></li>
                    &nbsp; /
                    <li className="breadcrumb-item total-price active" aria-current="page">Bilgiler</li>
                    &nbsp; /
                    <li className="breadcrumb-item total-price active">Gönderim(Kargo)</li>
                    &nbsp; /
                    <li className="breadcrumb-item total-price active" aria-current="page">Ödeme</li>
                  </ol>
                </nav>
                <h4 className="title total">Iletişim Bilgileri</h4>
                <p className="user-details total">Destek (almaliyim@gmail.com)</p>
                <h4 className="mb-3">Gönderi Adresi</h4>
                <form action="" className="d-flex gap-15 flex-wrap justify-content-between">
                  <div className="w-100">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Bölgeyi Seçin
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" placeholder="Ad" className="form-control" />
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" placeholder="Soyad" className="form-control" />
                  </div>
                  <div className="w-100">
                    <input type="text" placeholder="Adres" className="form-control" />
                  </div>
                  <div className="w-100">
                    <input type="text" placeholder="Sokak, Bina No ve Daire No" className="form-control" />
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" placeholder="Şehir" className="form-control" />
                  </div>
                  <div className="flex-grow-1">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>İlçe Seçin</option>
                  </select>
                  </div>
                  <div className="flex-grow-1">
                    <input type="text" placeholder="Posta Kodu" className="form-control" />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark"><IoMdArrowRoundBack className="me-2"/> Sepete Geri Dön</Link>
                      <Link to="/cart" className="button">Ödemeye Geç</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
<div className="border-bottom py-4">
  <div className="d-flex gap-10 mb-2 align-items-center">
  <div className="w-75 d-flex gap-10">
    <div className="w-25 position-relative">
      <span style={{top: "-10px", right: "2px"}} className="badge bg-secondary text-white rounded-circle p-2 position-absolute">
        1
      </span>
      <img className="img-fluid" src="../images/watch.jpg" alt="product"  />
    </div>
    <div>
      <h5 className="total-price">asdaddada</h5>
      <p className="total"> asdadsdad</p>
    </div>
  </div>
  <div className="flex-grow-1">
    <h5 className="total-price">TL 300</h5>
  </div>
</div>
  </div>
<div className="border-bottom py-4">
<div className="d-flex justify-content-between align-items-center">
  <p className="total">Ara Toplam</p>
  <p className="total-price">TL 300</p>
</div>
<div className="d-flex justify-content-between align-items-center">
  <p className="mb-0 total">Kargo</p>
  <p className="mb-0 total-price">TL 40</p>
</div>
</div>
<div className="d-flex justify-content-between align-items-center border-bottom py-4">
  <h4 className="total-price">Toplam Tutar</h4>
  <h5 className="total-price">TL 340</h5>
</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Checkout;