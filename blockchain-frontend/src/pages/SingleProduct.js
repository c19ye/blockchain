import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";

import Color from "../components/Color";
import { MdCompareArrows } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import Container from "../components/Container";

const SingleProduct = () => {
    const props = {
        width: 400, height: 600, zoomWidth: 600,
        img: "https://hodinkee.imgix.net/uploads/images/2d672cdd-a8a0-4f30-b40d-0d9a2ad38d57/Breitling-top-tim-triumph.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12"
    };
    const [orderedProduct, setorderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }

    return (
        <>
            <Meta title={"Ürün Detayi"} />
            <BreadCrumb title="Ürün Detayi" />
            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                               
                            </div>
                        </div>
                        <div className="other-product-images d-flex flex-wrap gap-15">
                            <div><img src="https://hodinkee.imgix.net/uploads/images/2d672cdd-a8a0-4f30-b40d-0d9a2ad38d57/Breitling-top-tim-triumph.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12" className="img-fluid" alt="" /></div>
                            <div><img src="https://hodinkee.imgix.net/uploads/images/2d672cdd-a8a0-4f30-b40d-0d9a2ad38d57/Breitling-top-tim-triumph.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12" className="img-fluid" alt="" /></div>
                            <div><img src="https://hodinkee.imgix.net/uploads/images/2d672cdd-a8a0-4f30-b40d-0d9a2ad38d57/Breitling-top-tim-triumph.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12" className="img-fluid" alt="" /></div>
                            <div><img src="https://hodinkee.imgix.net/uploads/images/2d672cdd-a8a0-4f30-b40d-0d9a2ad38d57/Breitling-top-tim-triumph.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12" className="img-fluid" alt="" /></div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="border-bottom">
                                <h3 className="title">Çocuklara Özel Birçok Renk Seçeneği ile Kulaklik</h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">TL 340</p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className="mb-0 t-review">3 Incelemeye Göre</p>
                                </div>
                                <a className="review-btn" href="review">Değerlendirme Yapin</a>
                            </div>
                            <div className="border-bottom py-3">
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Tür :</h3>
                                    <p className="product-data">Kol Saati</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Marka :</h3>
                                    <p className="product-data">Triumph</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Kategori :</h3>
                                    <p className="product-data">Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Etiket :</h3>
                                    <p className="product-data">Saat</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Stok :</h3>
                                    <p className="product-data">Mevcut</p>
                                </div>
                                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                    <h3 className="product-heading">Beden :</h3>
                                    <div className="d-flex flex-wrap gap-15">
                                        <span className="badge border border-1 bg-white text-dark border-secondary">
                                            S</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">
                                            M</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">
                                            L</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">
                                            XL</span>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                    <h3 className="product-heading">Renk :</h3>
                                    <Color />
                                </div>
                                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                                    <h3 className="product-heading">Miktar :</h3>
                                    <div className="">
                                        <input type="number" name=""
                                            min={1}
                                            max={10}
                                            className="form-control"
                                            style={{ width: "70px" }}
                                            id="" />
                                    </div>
                                    <div className="d-flex align-items-center gap-30 ms-5">
                                        <button className="button border-0" type="submit">Sepete Ekle</button>
                                        <button className="button signup">Şimdi Satin Al</button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <a href=""><MdCompareArrows className="fs-5 me-2" />Karşilaştirmak için ekle</a>
                                    </div>
                                    <div>
                                        <a href=""><GrFavorite className="fs-5 me-2" />İstek Listesine ekle</a>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column my-3">
                                    <h3 className="product-heading">Kargo & İadeler</h3>
                                    <p className="product-data">Tüm siparişlerde ücretsiz kargo ve iade!<br /> Bütün illere <b>5-10 iş günü</b> içerisinde gönderim.</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-3">
                                    <h3 className="product-heading">Ürün Linki:</h3>
                                    <a href="javascript:void(0);" onClick={() => {
                                        copyToClipboard(
                                            "https://hodinkee.imgix.net/uploads/images/2d672cdd-a8a0-4f30-b40d-0d9a2ad38d57/Breitling-top-tim-triumph.jpg?ixlib=rails-1.1.0&fm=jpg&q=55&auto=format&usm=12"
                                        );
                                    }}>Ürün Linkini Kopyala </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="description-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h4>Açiklama</h4>
                        <div className="bg-white p-3">
                            <p className="bg-white p-3">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, architecto vel, praesentium dolorem tempore sunt sit sed fugiat, corporis aperiam ratione maiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque a autem dolore asperiores ullam, velit atque maiores? Animi, voluptates doloribus.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="reviews-wrapper home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 id="review">Yorumlar</h3>
                        <div className="review-inner-wrapper">
                            <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4 className="mb-2">Müşteri Değerlendirmeleri</h4>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className="mb-0">2 Incelemeye Göre</p>
                                    </div>
                                </div>
                                {orderedProduct && (
                                    <div>
                                        <a className="text-dark text-decoration-underline" href="">
                                            Değerlendirme Yapin
                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className="review-form py-4">
                                <h4>
                                    Ürün Değerlendirmesi
                                </h4>
                                <form action="" className="d-flex flex-column gap-15">
                                    <div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={0}
                                            edit={true}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            name="" id=""
                                            className="w-100 form-control"
                                            cols="30" rows="4"
                                            placeholder="Yorum"
                                        ></textarea>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button className="button border-0">İncelemeyi Gönder</button>
                                    </div>
                                </form>
                            </div>
                            <div className="reviews mt-4">
                                <div className="review">
                                    <div className="d-flex gap-10 align-items-center">
                                        <h6 className="mb-0">Ali Kaptan</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <p className="mt-3">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum blanditiis dicta et adipisci incidunt laboriosam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia nisi aliquid blanditiis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Diğer Popüler Ürünler</h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SingleProduct