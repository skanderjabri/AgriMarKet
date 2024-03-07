import React from 'react'
import Header from './Header'
import Footer from './Footer';
import { Link, NavLink, useNavigate } from 'react-router-dom';
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

    }, {
        id: 5,
        name: 'Fresh Tomato',
        image: './assets/img/product-5.jpg',
        isNew: true,
        price: 19.00,
        discountedPrice: 29.00,
        status: 0
    },
    {
        id: 6,
        name: 'Fresh Tomato',
        image: './assets/img/product-6.jpg',
        isNew: true,
        price: 19.00,
        discountedPrice: 29.00,
        status: 1

    },
    {
        id: 7,
        name: 'Fresh Tomato',
        image: './assets/img/product-7.jpg',
        isNew: true,
        price: 19.00,
        discountedPrice: 29.00,
        status: 1

    },
    {
        id: 8,
        name: 'Fresh Tomato',
        image: './assets/img/product-8.jpg',
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
        <div className="col-12 text-center wow fadeInUp mt-3" data-wow-delay="0.1s">
            <a className="btn btn-primary rounded-pill py-3 px-5" href="">Browse More Products</a>
        </div>
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

const ListProduct = () => {
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
                            <li class="breadcrumb-item text-dark active" aria-current="page">Nos Produits</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/*  Page Header End */}

            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-0 gx-5 align-items-end">
                        <div class="col-lg-6">
                            <div class="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                                <h1 class="display-5 mb-3">Toutes les offres de fruits et légumes
                                </h1>
                                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className='container-fuild' style={{ marginTop: '-60px', padding: '20px' }} >
                <div className='row' style={{ margin: '20px' }}>
                    <div className='card col-lg-2'>
                        <h5 style={{ textDecoration: 'underline' }}> <i class="fa fa-filter" style={{ fontSize: '16px', marginRight: '5px' }}></i>
                            Filtres :</h5>
                        <InputCheckbox label="Fruits" name="Fruits" value="Fruits" nameInput="Fruits" />
                        <InputCheckbox label="Légumes" name="Légumes" value="Légumes" nameInput="Légumes" />
                        <p style={{ marginTop: '10px' }}> Catégorie :</p>
                        <InputCheckbox label="Pommes" name="Pommes" value="Pommes" nameInput="Pommes" />
                        <InputCheckbox label="Bananes" name="Bananes" value="Bananes" nameInput="Bananes" />
                        <InputCheckbox label="Oranges" name="Oranges" value="Oranges" nameInput="Oranges" />
                        <InputCheckbox label="Kiwis" name="Kiwis" value="Kiwis" nameInput="Kiwis" />
                        <InputCheckbox label="Poires" name="Poires" value="Poires" nameInput="Poires" />
                        <InputCheckbox label="Grenade" name="Grenade" value="Grenade" nameInput="Grenade" />
                        <InputCheckbox label="Tomates" name="Tomates" value="Tomates" nameInput="Tomates" />
                        <InputCheckbox label="Carottes" name="Carottes" value="Carottes" nameInput="Carottes" />
                        <InputCheckbox label="Courgette" name="Courgette" value="Courgette" nameInput="Courgette" />
                        <InputCheckbox label="Brocolis" name="Brocolis" value="Brocolis" nameInput="Brocolis" />
                        <InputCheckbox label="Poivron" name="Poivron" value="Poivron" nameInput="Poivron" />
                        <InputCheckbox label="Pommes de terre" name="Pommes_de_terre" value="Pommes_de_terre" nameInput="Pommes_de_terre" />
                        <p style={{ marginTop: '10px' }}>Origine :</p>
                        <InputCheckbox label="Béja" name="Béja" value="Béja" nameInput="Béja" />
                        <InputCheckbox label="Kef" name="Kef" value="Kef" nameInput="Kef" />
                        <InputCheckbox label="Sfex" name="Sfex" value="Sfex" nameInput="Sfex" />
                        <InputCheckbox label="Jendouba" name="Jendouba" value="Jendouba" nameInput="Jendouba" />
                        <InputCheckbox label="Autres" name="Autres" value="Autres" nameInput="Autres" />
                        <p style={{ marginTop: '10px' }}>Prix :</p>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <label htmlFor='minprix'>De</label>
                            </div>
                            <div className='col-lg-6'>
                                <label htmlFor='maxprix'>A</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <input type='number' className='form-control col-lg-6' name='minprix' id='minprix' />
                            </div>
                            <div className='col-lg-6'>
                                <input type='number' className='form-control col-lg-6' name='maxprix' id='maxprix' />
                            </div>

                        </div>
                        <p style={{ marginTop: '10px' }}>En promotion :</p>
                        <InputCheckbox label="En promotion" name="Enpromotion" value="Enpromotion" nameInput="Enpromotion" />

                    </div>

                    <div className='card col-lg-10' >
                        <div className='row d-flex justify-content-end mb-3' style={{ marginBottom: '15px' }} >
                            <div className='col-lg-3 d-flex'>
                                <select class="form-select " >
                                    <option>Prix croissant</option>
                                    <option>Prix Décroissant</option>
                                </select>
                            </div>
                        </div>
                        <ProductSection />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ListProduct