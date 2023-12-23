import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Bülten için Kaydolun</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input type="text" className="form-control py-1"
                  placeholder="Email Adresiniz"
                  aria-label="Email Adresiniz"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Abone Ol
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Bize Ulaş</h4>
              <div>
                <address className="text-white fs-5">
                Yukarıyurtçu, Yukarıyurtçu Mahallesi Eskişehir Yolu 29. Km, Mimar Sinan Caddesi No:4, 06790 Etimesgut/Ankara
                </address>
                <a href="tel:+312 5803663" 
                className="mt-3 d-block mb-1 text-white">
                (+312) 1111111
                </a>
                <a href="mailto:almaliyim@gmail.com" 
                className="mt-2 d-block mb-0 text-white">
                c2011075@student.cankaya.edu.tr
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                    <BsLinkedin className="fs-4"/>
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className="fs-4"/>
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="fs-4"/>
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="fs-4"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Bilgi</h4>
              <div className="footer-link d-flex flex-column">
                <Link to='#' className="text-white py-2 mb-1">Gizlilik Politikasi</Link>
                <Link to='#' className="text-white py-2 mb-1">Geri Ödeme Politikasi</Link>
                <Link to='#' className="text-white py-2 mb-1">Kargo Politikasi</Link>
                <Link to='#' className="text-white py-2 mb-1">Şartlar & Koşullar</Link>
                <Link className="text-white py-2 mb-1">Blog</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Hesap</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Hakkimda</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Iletişim</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Linkler</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptop</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
               {new Date().getFullYear()}: Powered by CU Ceng Students
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer