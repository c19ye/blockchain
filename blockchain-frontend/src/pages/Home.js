import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src="images/main-banner-1.jpg"
                className="img-fluid rounded-3" alt="main banner" />
              <div className="main-banner-content position-absolute">
                <h4>PROFESYONELLERE SÜPERŞARJLI.</h4>
                <h5>iPad S13+ Pro</h5>
                <p>Sadece 19999.00TL
                  <br /> veya TL241.62/ay da.</p>
                <Link className="button">SATIN AL</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>ÇOK SATAN</h4>
                  <h5>Laptop Max</h5>
                  <p>Sadece 24999TL
                    <br /> veya TL322.22/ay da.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>%15 INDIRIM</h4>
                  <h5>Smartwatch 7</h5>
                  <p>En son bant stillerini ve
                    <br />rengini SATIN ALIN.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>YENI URUN</h4>
                  <h5>iPad Air</h5>
                  <p>Sadece 13999.00TL
                    <br /> veya TL141.60/ay da.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>UCRETSIZ KARGO</h4>
                  <h5>AirPods Max</h5>
                  <p>Ultra Yüksek ses &
                    <br />Yüksek ses kalitesi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-15">
                <img src="images/service.png" alt="services" />
                <div>
                  <h6>Ücretsiz Kargo</h6>
                  <p className="mb-0">100TL üzeri tüm siparişlerde</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-02.png" alt="services" />
                <div>
                  <h6>Günlük Sürpriz Teklifler</h6>
                  <p className="mb-0">%25'e varan Indirim</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-03.png" alt="services" />
                <div>
                  <h6>Destek 7/24</h6>
                  <p className="mb-0">Uzman Destek Ekibi</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-04.png" alt="services" />
                <div>
                  <h6>Uygun Fiyatlar</h6>
                  <p className="mb-0">Önerilen Fabrika Satiş Fiyati</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src="images/service-05.png" alt="services" />
                <div>
                  <h6>Güvenli Ödeme</h6>
                  <p className="mb-0">100% Korumali Ödeme</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Kameralar</h6>
                  <p>10 Ürün</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Ürün</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Akilli Saat</h6>
                  <p>10 Ürün</p>
                </div>
                <img src="images/speaker.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Müzik & Oyun</h6>
                  <p>10 Ürün</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Kameralar</h6>
                  <p>10 Ürün</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Ürün</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Akilli Saat</h6>
                  <p>10 Ürün</p>
                </div>
                <img src="images/speaker.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Müzik & Oyun</h6>
                  <p>10 Ürün</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Öne Çikan Koleksiyon</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/watchap.jpg"
                className="img-fluid"
                alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Series 7 <br />Smart Watch</h6>
                <p>İtibaren 2000TL veya ayda 80TL taksitle</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/huawe.gif"
                className="img-fluid"
                alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Huawei</h5>
                <h6 className="text-dark">MateBook D15</h6>
                <p className="text-dark">15.6 İnç Parlama Önleyici IPS Ekran</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/ap11.jfif"
                className="img-fluid"
                alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Apple</h5>
                <h6 className="text-dark">IPhone 11 Pro</h6>
                <p className="text-dark">Apple Türkiye Garantisi ile Özel Fiyatlar</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/j.jpg"
                className="img-fluid"
                alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Evde Müzik</h5>
                <h6 className="text-dark">JBL Kalitesi</h6>
                <p className="text-dark">Evde Gümbür Gümbür Müzik</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Size Özel Ürünler</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Diğer Popüler Ürünler</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="col-12">
          <div className="marquee-inner-wrapper card-wrapper">
            <Marquee className="d-flex">
              <div className="mx-4 w-25">
                <img src="images/brand-01.png" alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src="images/brand-02.png" alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src="images/brand-03.png" alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src="images/brand-04.png" alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src="images/brand-05.png" alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src="images/brand-06.png" alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src="images/brand-07.png" alt="brand" />
              </div>
              <div className="mx-4 w-25">
                <img src="images/brand-08.png" alt="brand" />
              </div>
            </Marquee>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">En Son Bloglar</h3>
          </div>

        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home