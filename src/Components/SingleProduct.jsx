import React, { useEffect, useState } from 'react'
import Header from './Header'
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from './Footer';
import GetDetailsProductApi from '../Api/GetDetailsProductApi';
import Spinner from '../Function/Spinner'
import Url from '../util/Url';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const SingleProduct = () => {
    const [Product, setProduct] = useState({})
    const [IsLoading, setIsLoading] = useState(false)
    const [selectedIndex, setSelectIndex] = useState(0);
    const [quantity, setQuantity] = useState(0)
    const { id } = useParams()
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
    useEffect(() => {
        GetDetailsProductApi(id)
            .then((response) => {
                setProduct(response.data.Product)

            })
            .catch(error => {
                console.log("error => " + error);
                throw error;
            })
            .finally(() => {
                setIsLoading(true);
            });
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
            {IsLoading ? (
                <span>
                    <section class="ftco-section">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 mb-5 ftco-animate">
                                    <div className="gallery">
                                        <img className='card-img-top' src={`${Url.BaseFile}/produits/${Product.images[selectedIndex]}`} alt={Product.nom_produit} style={{ width: '600px', height: '500px', borderRadius: '10px' }} />
                                        <div className='mt-4'>
                                            {Product.images.map((image, index) => (
                                                index !== selectedIndex && (
                                                    <img
                                                        key={index}
                                                        src={`${Url.BaseFile}/produits/${image}`}
                                                        alt={Product.nom_produit}
                                                        style={{
                                                            height: '80px',
                                                            width: '80px',
                                                            marginRight: '10px',
                                                            cursor: 'pointer',
                                                            borderRadius: '10px',
                                                            border: '2px dotted #3cb815'
                                                        }}
                                                        onClick={() => setSelectIndex(index)}
                                                    />
                                                )
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 product-details pl-md-5 ftco-animate">
                                    <h3>{Product.nom_produit}</h3>
                                    {/* <div class="rating d-flex">
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
                                      */}
                                    <p class="price">
                                        {Product.discount == 0 && (
                                            <span className="text-primary me-1"> {Product.prix} TND  (KG)</span>
                                        )}
                                        {Product.discount != 0 && (
                                            <span>
                                                <span className="text-primary me-1"> {Product.prix - (Product.prix * (Product.discount / 100))} TND (KG)</span>
                                                <span className="text-body text-decoration-line-through">{Product.prix} TND</span>
                                            </span>
                                        )}
                                    </p>
                                    <p>
                                        <span className='text-primary'> Description :</span>
                                        <br />
                                        <span> {Product.Description} </span>
                                    </p>
                                    <div class="row mt-4">
                                        <div class="col-md-6">
                                        </div>
                                        <div class="w-100"></div>
                                        <div class="input-group col-lg-6 d-flex mb-3">
                                            <span class="input-group-btn mr-2">
                                                <button type="button" class="quantity-left-minus btn" data-type="minus" data-field="" onClick={() => setQuantity(quantity - 1)}>
                                                    <i class="fa-solid fa-minus text-primary"></i>
                                                </button>
                                            </span>
                                            <input style={{ marginLeft: '10px', marginRight: '10px' }} type="text" id="quantity" name="quantity" class="form-control input-number" value={quantity} max={Product.quantite_max} min={Product.quantite_min} />
                                            <span class="input-group-btn ml-2">
                                                <button type="button" class="quantity-right-plus btn" data-type="plus" data-field="" onClick={() => setQuantity(quantity + 1)}>
                                                    <i class="fa-solid fa-plus text-primary"></i>
                                                </button>
                                            </span>
                                        </div>
                                        <div class="w-100"></div>
                                        <div class="col-md-12">
                                            <p className='mt-1'>
                                                <i class="fa-solid fa-check text-secondary"></i>  <span style={{ color: "#000" }}> Stock : {Product.quantite_disponible} kg disponibles</span>
                                            </p>
                                            <p className='mt-1'>
                                                <i class="fa-solid fa-check text-secondary"></i> <span style={{ color: "#000" }}>  Min : {Product.quantite_min}</span>
                                            </p>
                                            <p className='mt-1'>
                                                <i class="fa-solid fa-check text-secondary"></i> <span style={{ color: "#000" }}>Max : {Product.quantite_max} </span>
                                            </p>
                                        </div>
                                    </div>
                                    <a className="btn btn-secondary rounded-pill py-3 px-5">
                                        <i class="fa-solid fa-basket-shopping"></i>
                                        <span style={{ marginLeft: '10px' }}>Ajouter au panier</span>
                                    </a>

                                </div>
                            </div>
                        </div>


                    </section>

                    <div class="container" style={{ marginTop: '-50px' }}>
                        <Tabs>
                            <TabList className="">
                                <Tab> Produit spécification</Tab>
                                <Tab>Information sur le producteur</Tab>
                                <Tab>Avis</Tab>
                            </TabList>
                            <TabPanel style={{ margin: '40px', }}>
                                <table className="tab-panel p-4">
                                    <tbody>
                                        <tr>
                                            <td className="table-cell"><b className='text-secondary'>Catégorie de produit:</b></td>
                                            <td className="table-cell text-capitalize"><span>{Product.categorie_produit}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="table-cell"><b className='text-secondary'>Type de produit:</b></td>
                                            <td className="table-cell text-capitalize"><span>{Product.type_produit}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="table-cell"><b className='text-secondary'>Saisonnalité du produit:</b></td>
                                            <td className="table-cell text-capitalize"><span>{Product.Saisonnalite_produit}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="table-cell"><b className='text-secondary'>Origine du produit:</b></td>
                                            <td className="table-cell text-capitalize"><span>{Product.Origine_produit}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="table-cell"><b className='text-secondary'>Certifications:</b></td>
                                            <td className="table-cell text-capitalize"><span>{Product.certifications_produit}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="table-cell"><b className='text-secondary'>Conditionnement du produit:</b></td>
                                            <td className="table-cell text-capitalize"><span>{Product.conditionnement_produit}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="table-cell"><b className='text-secondary'>Date de publication:</b></td>
                                            <td className="table-cell text-capitalize"><span>{`${Product.createdAt.substr(0, 10)} ${Product.createdAt.substr(11, 5)}`}</span></td>
                                        </tr>
                                    </tbody>
                                </table>

                            </TabPanel>
                            <TabPanel style={{ margin: '40px', }}>
                                <table className="tab-panel">
                                    <tbody>
                                        <tr>
                                            <td className='table-cell'><b className='text-secondary '>Nom et prénom du producteur :</b></td>
                                            <td className="table-cell"><span>{`${Product.userId.nom_producteur} ${Product.userId.prenom_producteur}`}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="table-cell"><b className='text-secondary'>Email du producteur:</b></td>
                                            <td className="table-cell"><span>{Product.userId.email}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="table-cell"><b className='text-secondary'>Téléphone du producteur :</b></td>
                                            <td className="table-cell"><span>{Product.userId.telephone}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="table-cell"><b className='text-secondary'>Adresse du producteur :</b></td>
                                            <td className="table-cell text-capitalize"><span>{Product.userId.adresse}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="table-cell"><b className='text-secondary'>Nom de l'exploitation agricole :</b></td>
                                            <td className="table-cell text-capitalize"><span>{Product.userId.nom_exploitation_agricole}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="table-cell"><b className='text-secondary'>Type de culture :</b></td>
                                            <td className="table-cell text-capitalize"><span>{Product.userId.type_de_culture}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="table-cell"><b className='text-secondary'>Emplacement de l'exploitation :</b></td>
                                            <td className="table-cell text-capitalize"><span>{Product.userId.emplacement_de_exploitation}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="table-cell"><b className='text-secondary'>Modes de production :</b></td>
                                            <td className="table-cell text-capitalize"><span>{Product.userId.modes_production}</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </TabPanel>
                        </Tabs>
                    </div>
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
                        </div>
                    </div>
                </span >
            ) : (
                <Spinner />
            )
            }


            <Footer />
        </div >
    )
}

export default SingleProduct