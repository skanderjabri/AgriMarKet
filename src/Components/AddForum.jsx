import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import GetAllCategorieForumApi from '../Api/GetAllCategorieForumApi';
import Spinner from '../Function/Spinner';
import { Divider } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import CreateForumApi from '../Api/CreateForumApi';
import AlertSweet from '../Function/AlertSweet';

const AddForum = ({ show, handleClose, GetAllForum }) => {
    const [AllCatforieForum, setAllCatforieForum] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [titre_forum, setTitre_forum] = useState("");
    const [description_forum, setDescription_forum] = useState("");
    const [categorieId, setCategorieId] = useState("");
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        if (show) {
            GetAllCategorieForum()
        }
    }, [show])

    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('Vous ne pouvez télécharger que des fichiers JPG/PNG !');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error("L'image doit être inférieure à 2 Mo!");
        }
        return isJpgOrPng && isLt2M;
    };


    const GetAllCategorieForum = async () => {
        try {
            const response = await GetAllCategorieForumApi();
            if (response.data.message === "ok") {
                setAllCatforieForum(response.data.ListeForumCategorie);
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de la récupération des catégories de forum:", error);
            throw error;
        }
        finally {
            setIsLoading(true)
        }
    };
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            setImageFile(info.file.originFileObj);
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const uploadButton = (
        <button
            style={{
                border: 0,
                background: 'none',
            }}
            type="button"
            className='col-lg-12'
        >
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Choisir un image
            </div>
        </button>
    );

    const AddForumFunction = () => {
        if (!titre_forum || !description_forum || !imageUrl || !categorieId) {
            AlertSweet("Tous les champs sont obligatoires .", '', 'error');
            return;
        }
        const userId = localStorage.getItem("AgriMaketUserId");
        setIsLoading(false)
        CreateForumApi(titre_forum, description_forum, userId, imageFile, categorieId)
            .then((response) => {
                if (response.data.message === "ok") {
                    AlertSweet("Le commentaire a été ajouté avec succès", '', 'success');
                    setTitre_forum("");
                    setDescription_forum("");
                    setCategorieId("")
                    setImageUrl(null);
                }
            })
            .catch((error) => {
                AlertSweet("Une erreur s'est produite.", '', 'error');
            })
            .finally(() => {
                handleClose()
                GetAllForum()
            });
    }
    return (
        <Modal show={show} onHide={handleClose} size="lg"
        //  centered fullscreen={true}
        >
            <Modal.Header closeButton>
                <Modal.Title
                    style={{ fontFamily: 'sans-serif' }}>
                    <h4 className='text-primary'>
                        Créer un nouveau forum de discussion
                    </h4>
                </Modal.Title>
            </Modal.Header>
            {isLoading ? (
                <Modal.Body>
                    <span className="text-black" style={{}}>
                        Veuillez compléter les informations du forum ci-dessous, s'il vous plaît :
                    </span>
                    <div className='row mt-3'>
                        <div className='col-lg-6'>
                            <label htmlFor='titreForum'> Titre Forum:</label>
                            <input type='text' name='titreForum' className='form-control' value={titre_forum} onChange={(e) => { setTitre_forum(e.target.value) }} />
                        </div>
                        <div className='col-lg-6'>
                            <label htmlFor='CategorieForum'> Catégorie Forum:</label>
                            <select name='CategorieForum' className='form-control form-select bg-white' value={categorieId} onChange={(e) => { setCategorieId(e.target.value) }}>
                                <option value="">Choisir une catégorie </option>
                                {AllCatforieForum.map((categorie, index) => (
                                    <option key={index} value={categorie._id}>{categorie.nom_categorie_forum}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div>
                            <label htmlFor='descCategorie'>Description Forum: </label>
                            <textarea name="descCategorie" cols={4} rows={3} className='form-control' value={description_forum} onChange={(e) => { setDescription_forum(e.target.value) }} >
                            </textarea>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <label>Image Forum :</label>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            ) : (
                                uploadButton
                            )}
                        </Upload>
                    </div>
                    <Divider />
                    <div className='row mt-4'>
                        <div className="col-auto">
                            <button className="btn btn-primary me-2 rounded-pill py-3 px-5" onClick={AddForumFunction}> <i class="fa-solid fa-plus"></i> <span style={{ marginLeft: '10px' }}>Ajouter forum</span></button>
                        </div>
                    </div>
                </Modal.Body>
            ) : (
                <Spinner />
            )}

        </Modal>
    )
}

export default AddForum