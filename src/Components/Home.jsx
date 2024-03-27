import React, { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import TruncatedDescription from '../Function/TruncatedDescription';
import GetAllAcualiteApi from '../Api/GetAllAcualiteApi';
import Url from '../util/Url';
import GetAllProduitsApi from '../Api/GetAllProduitsApi';
const Home = () => {
    const [ActualitesListe, setActualitesListe] = useState([])
    const [ProduitsListe, setProduitsListe] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        Promise.all([GetActualite(), GetAllProduit()])
            .then(() => setIsLoading(true))
            .catch(error => console.log("Erreur lors du chargement des données: " + error));
    }, []);

    const GetActualite = () => {
        return GetAllAcualiteApi(6, 1)
            .then(response => {
                setActualitesListe(response.data.ListeActualite);
            })
            .catch(error => {
                console.log("Erreur lors du chargement des actualités: " + error);
                throw error;
            });
    }

    const GetAllProduit = () => {
        return GetAllProduitsApi(6, 1)
            .then(response => {
                setProduitsListe(response.data.ListeProduit);
            })
            .catch(error => {
                console.log("Erreur lors du chargement des produits: " + error);
                throw error;
            });
    }

    return (
        <div className="App">
            <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div class="spinner-border text-primary" role="status"></div>
            </div>
            <Header />
            {/*  Carousel Start  */}
            <div class="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="w-100" src="./assets/img/carousel-1.jpg" alt="Image" />
                            <div class="carousel-caption">
                                <div class="container">
                                    <div class="row justify-content-start">
                                        <div class="col-lg-7">
                                            <h1 class="display-2 mb-5 animated slideInDown">Les aliments naturels sont toujours sains .
                                            </h1>
                                            <a href="" class="btn btn-primary rounded-pill py-sm-3 px-sm-5">Products</a>
                                            <a href="" class="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">Services</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src="./assets/img/carousel-2.jpg" alt="Image" />
                            <div class="carousel-caption">
                                <div class="container">
                                    <div class="row justify-content-start">
                                        <div class="col-lg-7">
                                            <h1 class="display-2 mb-5 animated slideInDown">Les aliments biologiques sont bons pour la santé
                                            </h1>
                                            <a href="" class="btn btn-primary rounded-pill py-sm-3 px-sm-5">Products</a>
                                            <a href="" class="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">Services</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* Carousel End */}

            {/* About Start  */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="about-img position-relative overflow-hidden p-5 pe-0">
                                <img class="img-fluid w-100" src="./assets/img/smiling-senior-man-holding-ripe-juicy-strawberries.jpg" style={{ borderRadius: '83% 17% 82% 18% / 15% 82% 18% 85%' }} />
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                            <h1 class="display-5 mb-4">Développez votre activité sans perdre de temps
                            </h1>
                            <p class="mb-4">Quelle que soit votre taille ou votre activité, que vous soyez acheteur, vendeur ou prestataire de services,
                                inscrivez-vous et rejoignez une communauté d'acteurs passionnés.

                            </p>
                            <p><i class="fa fa-check text-primary me-3"></i>Publier des offres de fruits et légumes</p>
                            <p><i class="fa fa-check text-primary me-3"></i>Publier des annonces</p>
                            <p><i class="fa fa-check text-primary me-3"></i>Marché local</p>
                            <p><i class="fa fa-check text-primary me-3"></i>Le tableau de bord</p>
                            <p><i class="fa fa-check text-primary me-3"></i>La Messagerie</p>

                            <a class="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Savoir plus</a>
                        </div>
                    </div>
                </div>
            </div>

            {/*About End  */}
            {/* Feature Start  */}
            <div class="container-fluid bg-light bg-icon my-5 py-6">
                <div class="container">
                    <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                        <h1 class="display-5 mb-3">Qui sommes nous ?</h1>
                        <p style={{ textAlign: 'justify' }}> AgriMarKet est une plateforme dont l'activité
                            principale réside dans le fonctionnement
                            d'une place de marché numérique B2B dédiée au
                            commerce de produits agricoles. Le processus de vente
                            s'effectue directement du producteur agricole à l'acheteur, éliminant ainsi
                            toute intervention d'un intermédiaire. Nos défis actuels comprennent :
                        </p>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="bg-white text-center h-100 p-4 p-xl-5">
                                <img class="img-fluid mb-4" src="./assets/img/icon-1.png" alt="" />
                                <h4 class="mb-3" >Publier des offres de fruits et légumes
                                </h4>
                                <p class="mb-4" style={{ textAlign: 'justify' }}> Avec AgriMarKet, publiez rapidement vos offres de fruits et légumes en précisant les
                                    détails essentiels tels que variété, saisonnalité, origine, certifications, photos, conditionnement,
                                    et plus encore. Une offre détaillée améliore la visibilité auprès des acheteurs professionnels,
                                    augmentant ainsi les opportunités de transactions réussies.
                                </p>
                                <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Savoir plus</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="bg-white text-center h-100 p-4 p-xl-5">
                                <img class="img-fluid mb-4" src="./assets/img/icon-2.png" alt="" />
                                <h4 class="mb-3">Publier des annonces
                                </h4>
                                <p class="mb-4" style={{ textAlign: 'justify' }}> Sur AgriMarKet, publiez rapidement des annonces détaillées pour vos services et équipements
                                    liés aux fruits et légumes. Incluez des informations essentielles telles que le type, la disponibilité, la
                                    localisation, les photos, et plus encore, pour maximiser l'attrait auprès des acheteurs professionnels.

                                </p>
                                <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Savoir plus</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="bg-white text-center h-100 p-4 p-xl-5">
                                <img class="img-fluid mb-4" src="./assets/img/icon-3.png" alt="" />
                                <h4 class="mb-3">Exporter vos offres
                                </h4>
                                <p class="mb-4" style={{ textAlign: 'justify' }}>Publiez et partagez facilement vos offres de fruits et légumes sur AgriMarKet.
                                    Exportez-les vers des formats web, Excel ou PDF sécurisés, tout en ayant la flexibilité de les
                                    mettre à jour régulièrement.

                                </p>
                                <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Savoir plus</a>
                            </div>
                        </div>
                    </div>
                    <div class="row g-4 mt-4">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="bg-white text-center h-100 p-4 p-xl-5">
                                <img class="img-fluid mb-4" src="./assets/img/icon-1.png" alt="" />
                                <h4 class="mb-3">Le tableau de bord

                                </h4>
                                <p class="mb-4" style={{ textAlign: 'justify' }}> Le tableau de bord centralise toutes vos activités sur AgriMarKet, offrant une vue
                                    complète de vos annonces, offres de fruits et légumes, statistiques de visites, et des informations
                                    essentielles pour gérer votre compte. C'est un outil essentiel pour surveiller et optimiser votre
                                    activité professionnelle.
                                </p>
                                <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Savoir plus</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="bg-white text-center h-100 p-4 p-xl-5">
                                <img class="img-fluid mb-4" src="./assets/img/icon-2.png" alt="" />
                                <h4 class="mb-3">La Messagerie

                                </h4>
                                <p class="mb-4" style={{ textAlign: 'justify' }}> La messagerie AgriMarKet simplifie les échanges avec vos clients, partenaires commerciaux,
                                    fournisseurs et autres acteurs du secteur des fruits et légumes. Grâce à la messagerie AgriMarKet, discutez
                                    aisément des détails de vos transactions, posez des questions sur les produits et services, négociez les
                                    prix et les conditions de vente, facilitant ainsi la conclusion de vos transactions.

                                </p>
                                <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Savoir plus</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="bg-white text-center h-100 p-4 p-xl-5">
                                <img class="img-fluid mb-4" src="./assets/img/icon-3.png" alt="" />
                                <h4 class="mb-3">L'actualité de la filière fruits et légumes

                                </h4>
                                <p class="mb-4" style={{ textAlign: 'justify' }}>Explorez les tendances, événements, nouveautés et initiatives de la filière des fruits et légumes dans
                                    notre section Actualités. Restez informé pour prendre des décisions éclairées pour votre entreprise. Consultez
                                    régulièrement notre plateforme pour les dernières actualités de l'industrie, et recevez en prime des nouvelles
                                    internes d'AgriMarKet.
                                </p>
                                <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Savoir plus</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Feature End  */}
            {/* Counter section start */}
            <div className=' '>
                <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                    <h1 class="display-5 mb-3"> Quelques chiffres sur notre platforme
                    </h1>
                    <p style={{ textAlign: 'justify' }}>
                    </p>
                </div>

                <section class="ftco-section ftco-counter img1 " id="section-counter" style={{ backgroundImage: 'url(./assets/img/bg_3.jpg)' }}>
                    <div class="container">
                        <div class="row justify-content-center py-5">
                            <div class="col-md-10">
                                <div class="row">
                                    <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div class="block-18 text-center">
                                            <div class="text">
                                                <strong class="number" data-number="10000" id='num1'>+1233</strong>
                                                <span>Clients</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div class="block-18 text-center">
                                            <div class="text">
                                                <strong class="number" data-number="100" id='num2' >+233</strong>
                                                <span>Agriculteurs</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div class="block-18 text-center">
                                            <div class="text">
                                                <strong class="number" data-number="1000" id='num3'  >+9999</strong>
                                                <span>Commandes</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                        <div class="block-18 text-center">
                                            <div class="text">
                                                <strong class="number" data-number="100" id='num4' >+1000</strong>
                                                <span>Produits </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* Counter section End */}
            {/*  Product Start  */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div class="row g-0 gx-5 align-items-end">

                        <div class="col-lg-6">
                            <div class="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                                <h1 class="display-5 mb-3">Nos produits</h1>
                                <p>Les dernières offres de fruits et légumes ou effectuez une recherche .
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                            <ul class="nav nav-pills d-inline-flex justify-content-end mb-5">
                                <li class="nav-item me-2">
                                    <a class="btn btn-outline-primary border-2 active" data-bs-toggle="pill" href="#tab-1">Vegetable</a>
                                </li>
                                <li class="nav-item me-2">
                                    <a class="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-2">Fruits </a>
                                </li>
                                <li class="nav-item me-0">
                                    <a class="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-3">Fresh</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {isLoading && (

                        <div className="row g-4">
                            <div className="tab-pane fade show p-0 active">
                                <div className='row'>
                                    {ProduitsListe.map((product, index) => (
                                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp">
                                            <div className="product-item">
                                                <div className="position-relative bg-light overflow-hidden">
                                                    <img className='img-fluid w-100' src={`${Url.BaseFile}/produits/${product.images[0]}`} alt="" />

                                                    {product.status === 1 && <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" >En stock</div>}
                                                    {product.status === 0 && <div className="bg-danger rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Hors stock</div>}

                                                </div>
                                                <div className="text-center p-4">
                                                    <a className="d-block h5 mb-2" href={`/singleproduct/${product._id}`}>{product.nom_produit}</a>
                                                    {product.discount == 0 && (
                                                        <span className="text-primary me-1"> {product.prix} TND</span>
                                                    )}
                                                    {product.discount != 0 && (
                                                        <span>
                                                            <span className="text-primary me-1"> {product.prix - (product.prix * (product.discount / 100))} TND</span>
                                                            <span className="text-body text-decoration-line-through">{product.prix} TND</span>
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="d-flex border-top">
                                                    <small className="w-50 text-center border-end py-2">
                                                        <a className="text-body" href={`/singleproduct/${product._id}`}><i className="fa fa-eye text-primary me-2"></i>Voir les détails
                                                        </a>
                                                    </small>

                                                    <small className="w-50 text-center py-2">
                                                        <a className="text-body" href=""><i className="fa fa-shopping-bag text-primary me-2"></i>Ajouter au panier
                                                        </a>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                                    <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Explorer Plus de Produits</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* Product End */}

            {/* Firm Visit Start
            <div class="container-fluid bg-primary bg-icon mt-5 py-6">
                <div class="container">
                    <div class="row g-5 align-items-center">
                        <div class="col-md-7 wow fadeIn" data-wow-delay="0.1s">
                            <h1 class="display-5 text-white mb-3">Visit Our Firm</h1>
                            <p class="text-white mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>
                        </div>
                        <div class="col-md-5 text-md-end wow fadeIn" data-wow-delay="0.5s">
                            <a class="btn btn-lg btn-secondary rounded-pill py-3 px-5" href="">Visit Now</a>
                        </div>
                    </div>
                </div>
            </div> */}
            {/*  Firm Visit End */}

            {/*  Testimonial Start 
            <div class="container-fluid bg-light bg-icon py-6 mb-5">
                <div class="container">
                    <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                        <h1 class="display-5 mb-3">Customer Review</h1>
                        <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <div class="testimonial-item position-relative bg-white p-5 mt-4">
                            <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                            <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            <div class="d-flex align-items-center">
                                <img class="flex-shrink-0 rounded-circle" src="./assets/img/testimonial-1.jpg" alt="" />
                                <div class="ms-3">
                                    <h5 class="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item position-relative bg-white p-5 mt-4">
                            <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                            <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            <div class="d-flex align-items-center">
                                <img class="flex-shrink-0 rounded-circle" src="./assets/img/testimonial-2.jpg" alt="" />
                                <div class="ms-3">
                                    <h5 class="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item position-relative bg-white p-5 mt-4">
                            <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                            <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            <div class="d-flex align-items-center">
                                <img class="flex-shrink-0 rounded-circle" src="./assets/img/testimonial-3.jpg" alt="" />
                                <div class="ms-3">
                                    <h5 class="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item position-relative bg-white p-5 mt-4">
                            <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
                            <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                            <div class="d-flex align-items-center">
                                <img class="flex-shrink-0 rounded-circle" src="./assets/img/testimonial-4.jpg" alt="" />
                                <div class="ms-3">
                                    <h5 class="mb-1">Client Name</h5>
                                    <span>Profession</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}
            {/*  Testimonial End */}
            {/* Blog Start
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                        <h1 class="display-5 mb-3">Latest Blog</h1>
                        <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <img class="img-fluid" src="./assets/img/blog-1.jpg" alt="" />
                            <div class="bg-light p-4">
                                <a class="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                                <div class="text-muted border-top pt-4">
                                    <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small>
                                    <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <img class="img-fluid" src="./assets/img/blog-2.jpg" alt="" />
                            <div class="bg-light p-4">
                                <a class="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                                <div class="text-muted border-top pt-4">
                                    <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small>
                                    <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <img class="img-fluid" src="./assets/img/blog-3.jpg" alt="" />
                            <div class="bg-light p-4">
                                <a class="d-block h5 lh-base mb-4" href="">How to cultivate organic fruits and vegetables in own firm</a>
                                <div class="text-muted border-top pt-4">
                                    <small class="me-3"><i class="fa fa-user text-primary me-2"></i>Admin</small>
                                    <small class="me-3"><i class="fa fa-calendar text-primary me-2"></i>01 Jan, 2045</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            */}
            {/* Blog end*/}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 'auto ' }}>
                        <h1 class=" display-6 mb-3">Toute l'actualité de la filière fruits et légumes
                        </h1>
                        <p>
                            Suivez l'actualité de la filière fruits et légumes ou explorez de nouveaux produits en accédant à notre lexique.
                        </p>

                    </div>
                    <div className='row g-4 text-end wow fadeInUp' style={{ marginRight: '0px' }} data-wow-delay="0.1s" >
                        <a href='/AllAcualites'>
                            <span className='text-primary' > Voir toute l'actualité <i class="fa-solid fa-arrow-right"></i></span>
                        </a>
                    </div>

                    <div className="row g-4">
                        {isLoading && (
                            <div className="row g-4">
                                {ActualitesListe.map((actualite, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`}>
                                        <div className="card">
                                            <img className="card-img-top" src={`${Url.BaseFile}/actualites/${actualite.image_Cover}`} alt="" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 py-1 px-3" >New</div>
                                            <div className="card-body">
                                                <a class="d-block h5 lh-base mb-4 card-title" href={`/actualite/${actualite._id}`}>{actualite.titre_actualite} .</a>
                                                <p className="card-text">
                                                    <TruncatedDescription description={actualite.description_actualite} maxLength={300} /> <br /> <a href={`/actualite/${actualite._id}`}><span className='text-primary' style={{ cursor: 'pointer' }}>Lire l'article</span></a>
                                                </p>
                                                <div className="text-muted border-top pt-4 ">
                                                    <small className="me-3"><i className="fa fa-user text-primary me-2"></i>AgriMarKet</small>
                                                    <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>Publié  {actualite.createdAt.substr(0, 10)}{' '}{actualite.createdAt.substr(11, 5)} </small>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))}

                            </div>
                        )}


                    </div>

                </div>
            </div>

            <Footer />

            <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>

        </div >
    )
}

export default Home