import React, { useEffect } from 'react'
import Header from './Header'
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
const products = [
    {
        id: 1,
        name: 'Fresh Tomato',
        image: './assets/img/product-1.jpg',
        isNew: true,
        price: 19.00,
        discountedPrice: 29.00,
        status: 1

    },
    {
        id: 2,
        name: 'Fresh Tomato',
        image: './assets/img/product-2.jpg',
        isNew: true,
        price: 19.00,
        discountedPrice: 29.00,
        status: 0

    },
    {
        id: 3,
        name: 'Fresh Tomato',
        image: './assets/img/product-3.jpg',
        isNew: true,
        price: 19.00,
        discountedPrice: 29.00,
        status: 0

    }, {
        id: 4,
        name: 'Fresh Tomato',
        image: './assets/img/product-4.jpg',
        isNew: true,
        price: 19.00,
        discountedPrice: 29.00,
        status: 1

    },
];

const ProductItem = ({ product }) => {
    const navigate = useNavigate()
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={product.delay}>
            <div className="product-item">
                <div className="position-relative bg-light overflow-hidden">
                    <img className="img-fluid w-100" src={product.image} alt="" />
                    {product.status === 1 && <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" >En stock</div>}
                    {product.status === 0 && <div className="bg-danger rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Hors stock</div>}

                </div>
                <div className="text-center p-4">
                    <a className="d-block h5 mb-2" href={`#${product.id}`}>{product.name}</a>
                    <span className="text-primary me-1"> {product.price.toFixed(2)} TND</span>
                    <span className="text-body text-decoration-line-through">{product.discountedPrice.toFixed(2)} TND</span>
                </div>
                <div className="d-flex border-top">
                    <small className="w-50 text-center border-end py-2" onClick={() => navigate('/SingleProduct')}>
                        <a className="text-body" href=""><i className="fa fa-eye text-primary me-2"></i>Voir les détails
                        </a>
                    </small>

                    <small className="w-50 text-center py-2">
                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Ajouter au panier
                        </a>
                    </small>
                </div>
            </div>
        </div>
    )
}




const ProductList = ({ productList }) => (
    <div className="row g-4">
        {productList.map((product) => (
            <ProductItem key={product.id} product={product} />
        ))}
    </div>
);
const ProductSection = () => (
    <div className="tab-pane fade show p-0 active">
        <ProductList productList={products} />

    </div>
);
const InputCheckbox = ({ label, id, value, nameInput }) => {
    return (
        <div className='col-lg-12' style={{ margin: "4px" }}>
            <input type='checkbox' className='form-check-input' name={nameInput} id={id} value={value} />
            <label htmlFor={id} style={{ marginLeft: "15px" }}>{label}</label>
        </div>
    );
}

const SingleProduct = () => {
    useEffect(() => {
        const gallery = new SimpleLightbox('.gallery a', {
            spinner: true,
            close: true,
            //  navText: ['< ', '> '],
            // download: true
        });
        return () => {
            gallery.destroy();
        };
    }, []);

    return (
        <div>
            <Header />
            {/* Page Header Start */}
            <div class="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <h1 class="display-3 mb-3 animated slideInDown">Nos Produits</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><a class="text-body" href="#">Home</a></li>
                            <li class="breadcrumb-item"><a class="text-body" href="#">Pages</a></li>
                            <li class="breadcrumb-item text-dark active" aria-current="page">Détailles produit</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/*  Page Header End */}

            <section class="ftco-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 mb-5 ftco-animate">
                            <div className="gallery">
                                <a href="./assets/img/product-2.jpg"><img src="./assets/img/product-2.jpg" alt="" title="Beautiful Image" /></a>
                            </div>


                        </div>
                        <div class="col-lg-6 product-details pl-md-5 ftco-animate">
                            <h3>Bell Pepper</h3>
                            <div class="rating d-flex">
                                <p class="text-left mr-4">
                                    <a href="#" class="mr-2">5.0</a>
                                    <a href="#"><span class="ion-ios-star-outline">*</span></a>
                                    <a href="#"><span class="ion-ios-star-outline">*</span></a>
                                    <a href="#"><span class="ion-ios-star-outline">*</span></a>
                                    <a href="#"><span class="ion-ios-star-outline">*</span></a>
                                    <a href="#"><span class="ion-ios-star-outline">*</span></a>
                                </p>
                                <p class="text-left mr-4">
                                    <a href="#" class="mr-2" style={{ color: '#000' }}>100 <span style={{ color: '#bbb' }}>Rating</span></a>
                                </p>
                                <p class="text-left">
                                    <a href="#" class="mr-2" style={{ color: '#000' }}>500 <span style={{ color: '#bbb' }}>Sold</span></a>
                                </p>
                            </div>
                            <p class="price"><span>$120.00</span></p>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until.
                            </p>
                            <div class="row mt-4">
                                <div class="col-md-6">
                                </div>
                                <div class="w-100"></div>
                                <div class="input-group col-md-6 d-flex mb-3">
                                    <span class="input-group-btn mr-2">
                                        <button type="button" class="quantity-left-minus btn" data-type="minus" data-field="">
                                            <i class="ion-ios-remove"></i>
                                        </button>
                                    </span>
                                    <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1" min="1" max="100" />
                                    <span class="input-group-btn ml-2">
                                        <button type="button" class="quantity-right-plus btn" data-type="plus" data-field="">
                                            <i class="ion-ios-add"></i>
                                        </button>
                                    </span>
                                </div>
                                <div class="w-100"></div>
                                <div class="col-md-12">
                                    <p style={{ color: "#000" }}>600 kg available</p>
                                </div>
                            </div>
                            <p><a href="cart.html" class="btn btn-primary py-3 px-5">Add to Cart</a></p>
                        </div>
                    </div>
                </div>


            </section>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-0 gx-5 align-items-end">
                        <div class="col-lg-6">
                            <div class="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                                <h2 class="display-5 mb-3">Autres produits
                                </h2>
                            </div>
                        </div>
                    </div>
                    <ProductSection />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default SingleProduct