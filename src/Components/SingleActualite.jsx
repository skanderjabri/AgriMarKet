import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Url from '../util/Url';
import InsererSautLigne from '../Function/InsererSautLigne';
import GetSingleActualiteApi from '../Api/GetSingleActualiteApi';
import GetAllAcualiteApi from '../Api/GetAllAcualiteApi';
import TruncatedDescription from '../Function/TruncatedDescription';
import { FacebookButton, FacebookCount } from "react-social";
const SingleActualite = () => {

    const [ActualiteDetails, setActualiteDetails] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [ActualitesListe, setActualitesListe] = useState([])
    const { id } = useParams();
    let url = "https://agrimarket.vercel.app/actualite/" + id;
    useEffect(() => {
        GetSingleActualite()
        GetAllActualite()
    }, [id])

    const GetSingleActualite = () => {
        GetSingleActualiteApi(id)
            .then((response) => {
                setActualiteDetails(response.data.actualite)
            })
            .catch((error) => {
                console.log("erreur se reproduit " + error)
            })
            .finally(() => {
                setIsLoading(true);
            });
    }
    const GetAllActualite = () => {
        GetAllAcualiteApi(6, 1)
            .then((response) => {
                setActualitesListe(response.data.ListeActualite)
            })
            .catch((error) => {
                console.log("erreur se reproduit " + error)
            })
            .finally(() => {
                setIsLoading(true);
            });

    }

    return (
        <div>
            <Header />
            {/* Page Header Start */}
            <div class="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <h1 class="display-3 mb-3 animated slideInDown">Actualités </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><a class="text-body" href="/">Accueil</a></li>
                            <li class="breadcrumb-item"><a class="text-body" href="/AllAcualites">Actualités</a></li>
                            {isLoading && ActualiteDetails && ActualiteDetails.titre_actualite
                                && (
                                    <li class="breadcrumb-item">
                                        <a class="text-body" href="">
                                            {ActualiteDetails.titre_actualite}
                                        </a>
                                    </li>
                                )
                            }
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            <div class="container-xxl py-6">
                <div class="container">
                    <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 'auto' }}>
                    </div>
                </div>
                {isLoading ? (
                    <div className='row'>
                        <div className='col-lg-8'>
                            <div className='card bg-white'>
                                {isLoading && ActualiteDetails && ActualiteDetails.titre_actualite && ActualiteDetails.titre_actualite !== "" && ActualiteDetails.titre_actualite !== null && (
                                    <span className='d-block h5 lh-base card-title m-2 '>
                                        {ActualiteDetails.titre_actualite}
                                    </span>
                                )}
                                {isLoading && ActualiteDetails && ActualiteDetails.createdAt &&
                                    (
                                        <span className='m-2'>
                                            <small className="me-3 mt-0">Publié  {ActualiteDetails.createdAt.substr(0, 10)}{' '}{ActualiteDetails.createdAt.substr(11, 5)} </small>
                                        </span>
                                    )}
                                {isLoading && ActualiteDetails && ActualiteDetails.image_Cover && ActualiteDetails.image_Cover !== "" && ActualiteDetails.image_Cover !== null && (
                                    <img className="card-img-top" src={`${Url.BaseFile}/actualites/${ActualiteDetails.image_Cover}`} alt="" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                                )}
                                {isLoading && ActualiteDetails && ActualiteDetails.description_actualite && ActualiteDetails.description_actualite !== "" && ActualiteDetails.description_actualite !== null && (
                                    <p className="card-text m-4" style={{ textAlign: "justify" }}>
                                        {InsererSautLigne(ActualiteDetails.description_actualite)}
                                    </p>
                                )}
                                <div className="d-flex justify-content-between" style={{ marginLeft: '14px' }}>
                                    <FacebookButton className="facebook-button" url={url} appId={401246749180496}>
                                        <i class="fa-brands fa-facebook"></i> {" "}Partager
                                    </FacebookButton>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className="row g-4">
                                {ActualitesListe.map((actualite, index) => (
                                    <div key={index} className="col-lg-12 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`}>
                                        <div className="card">
                                            <img className="card-img-top" src={`${Url.BaseFile}/actualites/${actualite.image_Cover}`} alt="" style={{ height: "100%", minHeight: "250px", }} />
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 py-1 px-3" >New</div>
                                            <div className='' style={{
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                                            }}>
                                                <div className="card-body">
                                                    <a class="card-title text-white" href={`/actualite/${actualite._id}`}> <b> {actualite.titre_actualite}  </b>.</a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (

                    <div className='vh-100 d-flex justify-content-center align-items-center'>
                        <div className="loaderLog">
                        </div>
                    </div>
                )}

            </div>
            <Footer />
        </div>
    )
}

export default SingleActualite