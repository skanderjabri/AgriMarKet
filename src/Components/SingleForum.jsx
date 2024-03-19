import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GetSingleForumApi from '../Api/GetSingleForumApi'
import Header from './Header'
import Footer from './Footer'
import Spinner from '../Function/Spinner'
import { Avatar, Divider } from 'antd'
import Url from '../util/Url'
import InsererSautLigne from '../Function/InsererSautLigne';

const SingleForum = () => {
    const [DetailsForum, setDetailsForum] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const { id } = useParams()
    useEffect(() => {
        GetSingleForumApi(id)
            .then((response) => {
                setDetailsForum(response.data.forum)
            })
            .catch((error) => {
                console.log("erreur se reproduit lors de la connexion " + error)
            })
            .finally(() => {
                setIsLoading(true);
            });
    }, [id])
    return (
        <div>
            <Header />
            <div class="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <h1 class="display-3 mb-3 animated slideInDown">Forum</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><a class="text-body" href="/">Accueil</a></li>
                            <li class="breadcrumb-item"><a class="text-body" href="/community">Communauté</a></li>
                            <li class="breadcrumb-item"><a class="text-body" href="">Forum</a></li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="container-xxl py-6">
                <div class="container">
                    <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                    </div>
                    {isLoading ? (
                        <div className='row'>
                            <div className='col-lg-10'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='d-flex p-2'>
                                            <div className='col-lg-1'>
                                                <Avatar size={50} src={`${Url.BaseFile}/producteur/${DetailsForum.userId.image_user}`} alt='error' />
                                            </div>
                                            <div className='col-lg-9' style={{ marginLeft: '-10px' }}>
                                                <a href={`/singleforum/${DetailsForum._id}`}><span className='iconTitre'>{DetailsForum.titre_forum} .</span></a>
                                                <span className="text-gray" style={{ display: 'block', fontSize: '14px', marginTop: '5px' }}>
                                                    <span>  <i class="fa-regular fa-user"></i> {DetailsForum.userId.nom_producteur} {" "} {DetailsForum.userId.prenom_producteur}</span>
                                                    <span style={{ marginLeft: '20px' }}> <i class="fa-regular fa-clock"></i> {DetailsForum.createdAt.substr(0, 10)}{' '}{DetailsForum.createdAt.substr(11, 5)} </span>
                                                </span>
                                            </div>
                                            <div className='col-lg-3'>
                                            <span className="iconhover" style={{}}><i class="fa-regular fa-heart"></i> {DetailsForum.NbresLikes}</span>
                                            <span className="iconhover" style={{ marginLeft: '12px' }}> <i class="fa-regular fa-eye"></i> {DetailsForum.NbresVues}</span>
                                            <span className="iconhover" style={{ marginLeft: '12px' }}>  <i class="fa-regular fa-comments"></i><span style={{ marginLeft: '10px' }} >{DetailsForum.NbresVues}</span></span>
                                        </div>

                                        </div>
                                        <Divider />
                                        <span className='text-primary m-4' style={{ fontFamily: 'sans-serif', fontWeight: "bold", fontSize: '20px' }}>
                                            Q: {DetailsForum.titre_forum}
                                        </span>
                                        {isLoading && DetailsForum && DetailsForum.description_forum && DetailsForum.description_forum !== "" && DetailsForum.description_forum !== null && (
                                            <p className="card-text m-4 " style={{ textAlign: "justify", fontFamily: 'sans-serif' }}>
                                                {DetailsForum.description_forum}
                                            </p>
                                        )}
                                        {isLoading && DetailsForum && DetailsForum.image_Cover && DetailsForum.image_Cover !== "" && DetailsForum.image_Cover !== null && (
                                            <img className="card-img-top" src={`${Url.BaseFile}/forums/${DetailsForum.image_Cover}`} alt="" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
                                        )}
                                        {isLoading && DetailsForum && DetailsForum.tags && (
                                            <p className="card-text m-4 d-flex" style={{}}>
                                                <i class="fa-solid fa-tags text-primary" style={{ fontSize: '20px', marginTop: '14px' }}></i>
                                                {DetailsForum.tags.length > 0 ? (
                                                    <ul className="list-unstyled w_tag_list style-light" style={{ marginLeft: '10px' }}>
                                                        {DetailsForum.tags.map((tag, index) => (
                                                            <span key={index}>
                                                                <li><a href="#">{tag}</a></li>
                                                            </span>
                                                        ))}
                                                    </ul>

                                                ) : (
                                                    <span className='text-primary' style={{ marginTop: '12px', marginLeft: '10px', fontFamily: 'sans-serif' }}>
                                                        Aucune tag dans ce forum
                                                    </span>
                                                )}


                                            </p>
                                        )}

                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-2'>
                                ssssssssss
                            </div>
                        </div>

                    ) : (

                        <Spinner />
                    )}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default SingleForum