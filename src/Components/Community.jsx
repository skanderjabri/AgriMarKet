import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Button, Dropdown, Menu, Avatar, Divider } from 'antd';
import Spinner from '../Function/Spinner';
import Url from '../util/Url';
import GetAllForumApi from '../Api/GetAllForumApi';
import GetAllCategorieForumApi from '../Api/GetAllCategorieForumApi';
import AlertSweet from '../Function/AlertSweet';
const Community = () => {
    const [AllForum, setAllForum] = useState([])
    const [AllCatforieForum, setAllCatforieForum] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        GetAllForum();
        GetAllCategorieForum();
    }, [])

    const GetAllForum = () => {
        GetAllForumApi()
            .then((response) => {
                if (response.data.message === "ok") {
                    setAllForum(response.data.ListeForum)
                }
            })
            .catch((error) => {
                console.log("erreur se reproduit lors de la connexion " + error)
            })
            .finally(() => {
                setIsLoading(true);
            });
    }

    const GetAllCategorieForum = () => {
        GetAllCategorieForumApi()
            .then((response) => {
                if (response.data.message === "ok") {
                    setAllCatforieForum(response.data.ListeForumCategorie)
                }
            })
            .catch((error) => {
                console.log("erreur se reproduit lors de la connexion " + error)
            })
            .finally(() => {
                setIsLoading(true);
            });
    }
    const menu = (
        <Menu>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
        </Menu>
    );
    const affichage = () => {

        if (localStorage.getItem("AgriMaketRole") == null || localStorage.getItem("AgriMaketRole") == "") {
            AlertSweet('Il faut connecter !', '', 'error')
            return;
        }
        alert("skon")
    }
    return (
        <div>
            <Header />
            {/* Page Header Start */}
            <div class="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <h1 class="display-3 mb-3 animated slideInDown">Communauté </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><a class="text-body" href="/">Accueil</a></li>
                            <li class="breadcrumb-item"><a class="text-body" href="/community">Communauté </a></li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="container-fluid py-6 pl-5">
                <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 'auto' }}>
                    <h2 class=" mb-3">
                        Partager vos connaissances, échanger des idées et prospérer ensemble dans le monde de l'agriculture .
                    </h2>
                </div>
                {isLoading ? (
                    <div className='row g-4 wow fadeInUp' data-wow-delay="0.2s">
                        <div className='col-lg-3'>
                            <h5 className='text-primary' style={{ fontFamily: 'sans-serif', }}>
                                Les sujets de la communauté
                            </h5>
                            <div className='mt-3'>
                                <ul className="list-unstyled w_tag_list style-light">
                                    {AllCatforieForum.map((categorie, index) => (
                                        <span>
                                            <li><a href="#">{categorie.nom_categorie_forum}</a></li>
                                        </span>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-7'>
                            <div className='card bg-white p-0'>
                                <div className='card-header' style={{ background: 'rgba(76, 76, 241, 0.05)', borderRadius: '10px' }}>
                                    <div className='row p-2'>
                                        <div className='col-lg-2'>
                                            <i class="fa-solid fa-ban text-danger"></i> <span style={{ marginLeft: '10px', fontFamily: 'sans-serif' }}>{19} Fermé</span>
                                        </div>
                                        <div className='col-lg-3'>
                                            <i class="fa-solid fa-circle-check text-primary"></i> <span style={{ marginLeft: '10px', fontFamily: 'sans-serif' }}>{120} Ouvert</span>
                                        </div>
                                        <div className='col-lg-3'>
                                            <i class="fa-solid fa-rotate-right text-secondary"></i> <span style={{ marginLeft: '10px', fontFamily: 'sans-serif' }}>Reset</span>
                                        </div>
                                        <div className='col-lg-3'>
                                            <Dropdown overlay={menu} placement="bottomLeft" arrow>
                                                <span>Trier <i class="fa-solid fa-arrow-down"></i></span>
                                            </Dropdown>
                                            {/*<Avatar.Group size="meduim">
                                                <Avatar src="../assets/img/testimonial-1.jpg" />
                                                <Avatar src="../assets/img/testimonial-2.jpg" />
                                                <Avatar src="../assets/img/testimonial-3.jpg" />
                                            </Avatar.Group> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='card-body'>
                                    {AllForum.map((forum, index) => (
                                        <div key={index} className='row'>
                                            <div className='d-flex p-2'>
                                                <div className='col-lg-1'>
                                                    <Avatar size={50} src={`${Url.BaseFile}/producteur/${forum.userId.image_user}`} alt='error' />
                                                </div>
                                                <div className='col-lg-7' style={{ marginLeft: '20px' }}>
                                                    <a href={`/singleforum/${forum._id}`}><span style={{ color: 'black' }}>{forum.titre_forum}</span></a>
                                                    <span className="text-primary" style={{ display: 'block', fontSize: '14px', marginTop: '5px' }}>
                                                        <span>  <i class="fa-regular fa-user"></i> {forum.userId.nom_producteur} {" "} {forum.userId.prenom_producteur}</span>
                                                        <span style={{ marginLeft: '20px' }}> <i class="fa-regular fa-clock"></i> {forum.createdAt.substr(0, 10)}{' '}{forum.createdAt.substr(11, 5)} </span>
                                                    </span>

                                                </div>
                                                <div className='col-lg-3'>
                                                    <span className="iconhover" style={{}}><i class="fa-regular fa-heart"></i> {forum.NbresLikes}</span>
                                                    <span className="iconhover" style={{ marginLeft: '12px' }}> <i class="fa-regular fa-eye"></i> {forum.NbresVues}</span>
                                                    <span className="iconhover" style={{ marginLeft: '12px' }}>  <i class="fa-regular fa-comments"></i><span style={{ marginLeft: '10px' }} >{forum.NbresVues}</span></span>
                                                </div>
                                            </div>
                                            <Divider />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2'>
                            <div>
                                <button className='btn btn-primary rounded-pill py-3 px-5' onClick={affichage}>
                                    Créer un forum
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Spinner />
                )}

            </div>



            <Footer />
        </div >
    )
}

export default Community