import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import GetAllAcualiteApi from '../Api/GetAllAcualiteApi'
import Url from '../util/Url'
import TruncatedDescription from '../Function/TruncatedDescription'
import { Pagination } from 'react-bootstrap';
const AllAcualites = () => {
    const [ActualitesListe, setActualitesListe] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1);
    const [totalePages, setTotalPages] = useState(1)

    useEffect(() => {
        GetActualite()
    }, [page])


    const GetActualite = () => {
        const limit = 9;
        GetAllAcualiteApi(limit, page)
            .then((response) => {
                setActualitesListe(response.data.ListeActualite)
                setTotalPages(Math.ceil(response.data.totaleCount / limit));
            })
            .catch((error) => {
                console.log("erreur se reproduit lors de la connexion " + error)
            })
            .finally(() => {
                setIsLoading(true);
            });
    }
    const handlePageChange = (newPage) => {
        setPage(newPage)
        if (newPage > 1 && newPage < totalePages) {
            setIsLoading(false)
            return;
        }
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
                            <li class="breadcrumb-item"><a class="text-body" href="#">Actualités</a></li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/*  Page Header End */}
            <div class="container-xxl py-6">
                <div class="container">
                    <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 'auto' }}>
                        <h1 class="display-6 mb-3">Toute l'actualité de la filière fruits et légumes
                        </h1>
                    </div>
                    {isLoading ? (
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
                            <div className='mt-5 d-flex justify-content-center align-items-center wow fadeInUp' data-wow-delay='0.21s'>
                                <Pagination>
                                    <Pagination.First onClick={() => handlePageChange(1)} />
                                    <Pagination.Prev onClick={() => handlePageChange(Math.max(page - 1, 1))} />
                                    {[...Array(totalePages)].map((_, i) => (
                                        <Pagination.Item
                                            key={i + 1}
                                            active={i + 1 === page}
                                            onClick={() => handlePageChange(i + 1)}
                                        >
                                            {i + 1}
                                        </Pagination.Item>
                                    ))}
                                    <Pagination.Next onClick={() => handlePageChange(Math.min(page + 1, totalePages))} />
                                    <Pagination.Last onClick={() => handlePageChange(totalePages)} />
                                </Pagination>

                            </div>

                        </div>
                    ) :
                        (
                            <div className='vh-100 d-flex justify-content-center align-items-center'>
                                <div className="loaderLog">
                                </div>
                            </div>
                        )}
                </div>

            </div >
            <Footer />
        </div >
    )
}

export default AllAcualites