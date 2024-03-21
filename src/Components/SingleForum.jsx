import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GetSingleForumApi from '../Api/GetSingleForumApi'
import Header from './Header'
import Footer from './Footer'
import Spinner from '../Function/Spinner'
import { Avatar, Divider } from 'antd'
import Url from '../util/Url'
import GetAllForumCommentByIdForum from '../Api/GetAllForumCommentByIdForumApi'
import CreateCommentForumApi from '../Api/CreateCommentForumApi'
import AlertSweet from '../Function/AlertSweet'
import InputEmoji from 'react-input-emoji'
import TextareaAutosize from 'react-textarea-autosize';
import LikeDislikeForumCommentApi from '../Api/LikeDislikeForumCommentApi'
const SingleForum = () => {
    const [DetailsForum, setDetailsForum] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [ListComment, setListComment] = useState([]);
    const [comment_forum, setComment_forum] = useState("")
    const { id } = useParams()

    useEffect(() => {
        Promise.all([GetSingleForum(), GetAllCommentForum()])
            .then(() => {
                setIsLoading(true);
            })
            .catch((error) => {
                console.log("Une erreur s'est produite lors de la récupération des données : ", error);
                setIsLoading(true);
            });
    }, [id]);

    const GetSingleForum = () => {
        return GetSingleForumApi(id)
            .then((response) => {
                setDetailsForum(response.data.forum);
            })
            .catch((error) => {
                console.log("Erreur lors de la récupération du forum : ", error);
            });
    }

    const GetAllCommentForum = () => {
        return GetAllForumCommentByIdForum(id)
            .then((response) => {
                setListComment(response.data.ListeForumComment);
            })
            .catch((error) => {
                console.log("Erreur lors de la récupération des commentaires : ", error);
            });
    }
    const AddCommentForum = async () => {
        const userRole = localStorage.getItem("AgriMaketRole");
        const userId = localStorage.getItem("AgriMaketUserId");


        if (!userRole) {
            AlertSweet('Il faut être connecté !', '', 'error');
            return;
        }
        if (userRole !== "producteur") {
            AlertSweet("Vous n'êtes pas autorisé à commenter cet espace réservé exclusivement aux producteurs !", '', 'error');
            return;
        }
        if (!comment_forum) {
            AlertSweet('Commentaire obligatoire !', '', 'error');
            return;
        }

        setIsLoading(false);

        try {
            const forumId = DetailsForum._id;
            const response = await CreateCommentForumApi(comment_forum, userId, forumId);

            if (response.data.message === "ok") {
                AlertSweet("Le commentaire a été ajouté avec succès", '', 'success');
                setComment_forum("");
                await Promise.all([GetSingleForum(), GetAllCommentForum()]);
            }
        } catch (error) {
            AlertSweet("Erreur lors de l'insertion du commentaire !", '', 'error');
        } finally {
            setIsLoading(true);
        }
    };
    const LikeDislikeComment = async (CommentId) => {
        const userRole = localStorage.getItem("AgriMaketRole");
        const userId = localStorage.getItem("AgriMaketUserId");

        if (!userRole) {
            AlertSweet('Il faut être connecté !', "", 'error');
            return;
        }
        if (userRole !== "producteur") {
            AlertSweet("Vous n'êtes pas autorisé à commenter cet espace réservé exclusivement aux producteurs !", "", 'error');
            return;
        }

        setIsLoading(false);

        try {
            const response = await LikeDislikeForumCommentApi(userId, CommentId);

            const message = response.data.message === "Like ajouté" ? "Le like a été ajouté." : "Le like a été retiré.";
            AlertSweet(message, '', 'success');
            await Promise.all([GetSingleForum(), GetAllCommentForum()]);
        } catch (error) {
            AlertSweet("Erreur !", "", 'error');
        } finally {
            setIsLoading(true);
        }
    }

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
                        <div>
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
                                                    <span className="iconhover" style={{ marginLeft: '12px' }}>  <i class="fa-regular fa-comments"></i><span style={{ marginLeft: '10px' }} >{ListComment.length}</span></span>
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
                            <div className='row g-4 mt-4'>
                                {ListComment.length > 0 ? (
                                    <div className='col-lg-10'>
                                        <div className='card'>
                                            <h5 className='text-secondary m-3'>
                                                Toutes les réponses {" "} ({ListComment.length})
                                            </h5>
                                            {ListComment.map((comment, index) => (
                                                <div key={index}>
                                                    <div className='card-body'>
                                                        <div className='d-flex p-2'>
                                                            <div className='col-lg-1'>
                                                                <Avatar size={50} src={`${Url.BaseFile}/producteur/${comment.userId.image_user}`} alt='error' />
                                                            </div>
                                                            <div className='col-lg-9' style={{ marginLeft: '-10px' }}>
                                                                <span>
                                                                    <i class="fa-regular fa-user"></i>
                                                                    <span style={{ marginLeft: '8px' }}>{comment.userId.nom_producteur} {" "} {comment.userId.prenom_producteur}</span>
                                                                </span>
                                                                <span style={{ marginLeft: '20px' }}> <i class="fa-regular fa-clock"></i>
                                                                    <span style={{ marginLeft: '8px' }}>
                                                                        {comment.createdAt.substr(0, 10)}{' '}
                                                                        {comment.createdAt.substr(11, 5)}
                                                                    </span>
                                                                </span>
                                                                <span className="text-gray"
                                                                    style={{
                                                                        display: 'block',
                                                                        fontSize: '16px',
                                                                        fontFamily: 'sans-serif',
                                                                        marginTop: '5px',
                                                                        textAlign: 'justify'

                                                                    }}>
                                                                    {comment.comment_forum}
                                                                </span>
                                                            </div>
                                                            <div className='' style={{ marginLeft: '50px' }}>
                                                                <span className="iconhover" style={{ cursor: "pointer" }} onClick={() => { LikeDislikeComment(comment._id) }}>
                                                                    <i class="fa-regular fa-heart" ></i>
                                                                </span>
                                                                <span className="text-primary" style={{ marginLeft: '10px' }}>
                                                                    {comment.likes.length}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <Divider />
                                                    </div>
                                                </div>
                                            ))}
                                            <InputEmoji
                                                className="form-control"
                                                value={comment_forum}
                                                onChange={(message) => { setComment_forum(message) }}
                                                placeholder="Ajouter un commentaire ..."
                                                borderRadius={70}

                                            />
                                            <button className='btn btn-primary rounded-pill py-2 px-5 mt-2' style={{ fontSize: '20px', fontFamily: 'sans-serif' }} onClick={AddCommentForum}>
                                                <span><i class="fa-solid fa-reply"></i>  </span>  <span style={{ marginLeft: '10px' }} >Répondre</span>
                                            </button>
                                        </div>
                                    </div>

                                ) :
                                    (
                                        <div className='col-lg-10'>
                                            <InputEmoji
                                                className="form-control"
                                                value={comment_forum}
                                                onChange={(message) => { setComment_forum(message) }}
                                                placeholder="Ajouter un commentaire ..."
                                                borderRadius={70}

                                            />
                                            <button className='btn btn-primary rounded-pill py-2 px-5 mt-2' style={{ fontSize: '20px', fontFamily: 'sans-serif' }} onClick={AddCommentForum}>
                                                <span><i class="fa-solid fa-reply"></i>  </span>  <span style={{ marginLeft: '10px' }} >Répondre</span>
                                            </button>
                                        </div>
                                    )}

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