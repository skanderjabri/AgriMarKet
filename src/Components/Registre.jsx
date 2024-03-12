import React, { useState } from 'react'
import { Stepper, Step } from 'react-form-stepper';
import ImageUploading from 'react-images-uploading';
import SaveProducteurApi from '../Api/SaveProducteurApi';
import useAlert from '../Function/AlertBootsrap';
import Alert from "react-bootstrap/Alert"
import { useNavigate } from 'react-router-dom';
const Registre = () => {
    const navigate = useNavigate()
    const [selectedCard, setSelectedCard] = useState("");
    const [step1, setstep1] = useState(true);
    const [step2, setstep2] = useState(false);
    const [step3, setstep3] = useState(false);
    const [images, setImages] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [nom_producteur, setnom_producteur] = useState("");
    const [prenom_producteur, setprenom_producteur] = useState("");
    const [telephone, setTelephone] = useState("");
    const [adresse, setadresse] = useState("");
    const [nom_exploitation_agricole, setnom_exploitation_agricole] = useState("");
    const [type_de_culture, settype_de_culture] = useState("");
    const [emplacement_de_exploitation, setemplacement_de_exploitation] = useState("");
    const [superficie_terres_agricoles, setsuperficie_terres_agricoles] = useState("");
    const [description_exploitation, setdescription_exploitation] = useState("");
    const [modes_production, setmodes_production] = useState("");
    const [certifications, setcertifications] = useState("");
    const { alertUser, showAlert, clearAlert } = useAlert();
    const [isLoading, setIsLoading] = useState(false);

    const maxNumber = 10;
    const maxNumber1 = 1;
    var height = window.innerHeight;
    var width = window.innerWidth;

    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
    };



    const handleCardClick = (card) => {
        setSelectedCard(card);
    };
    const step1tostep2 = () => {
        setstep1(false);
        setstep2(true);
    }
    const step2tostep3 = () => {
        setstep2(false);
        setstep3(true);
    }
    const ReturnStep = () => {
        setstep3(false);
        setstep2(true);
    }


    const Step2toStep3Producteur = () => {
        if (nom_producteur.trim() === "") {
            showAlert("Le nom obligatoire !", "danger");
            return;
        }
        if (prenom_producteur.trim() === "") {
            showAlert("Le prénom obligatoire !", "danger");
            return;
        }
        if (telephone.trim() === "") {
            showAlert("Le numéro du téléphone  obligatoire !", "danger");
            return;
        }
        if (adresse.trim() === "") {
            showAlert(" L'adresse obligatoire !", "danger");
            return;
        }
        if (email.trim() === "") {
            showAlert("Email obligatoire !", "danger");
            return;
        }
        if (password.trim() === "") {
            showAlert("Mot de passe obligatoire !", "danger");
            return;
        }
        if (password.trim() !== confirmPassword.trim()) {
            showAlert("Les deux mots de passe ne sont pas identiques !", "danger");
            return;
        }
        clearAlert();
        setstep2(false);
        setstep3(true);
    }


    const SignupProducteur = async () => {
        if (nom_exploitation_agricole.trim() === "") {
            showAlert("Nom exploitation agricole obligatoire", "danger");
            return;
        }
        if (emplacement_de_exploitation.trim() === "") {
            showAlert("Adresse exploitation obligatoire", "danger");
            return;
        }
        if (superficie_terres_agricoles.trim() === "") {
            showAlert("Superficie terres agricoles obligatoire", "danger");
            return;
        }
        if (type_de_culture.trim() === "") {
            showAlert("Type de culture agricole obligatoire", "danger");
            return;
        }
        if (description_exploitation.trim() === "") {
            showAlert("Description exploitation agricole", "danger");
            return;
        }
        if (modes_production.trim() === "") {
            showAlert("Modes de production agricole", "danger");
            return;
        }
        if (certifications.trim() === "") {
            showAlert("certifications agricoles", "danger");
            return;
        }
        if (images.length < 2) {
            showAlert("2 images minimum pour l'exploitation agricole", "danger");
            return;
        }
        clearAlert();
        setIsLoading(true)
        await SaveProducteurApi(
            email,
            password,
            nom_producteur,
            prenom_producteur,
            telephone,
            adresse,
            nom_exploitation_agricole,
            type_de_culture,
            emplacement_de_exploitation,
            superficie_terres_agricoles,
            modes_production,
            certifications,
            description_exploitation,
            images
        ).then((response) => {
            if (response.data.message === "Utilisateur existe !") {
                showAlert("Producteur déja existe ! ", "danger");
            }
            else if (response.data.message === "ok") {
                navigate('/Login')
                window.location.reload();
            }
            else {
                showAlert("erreur se reproduit lors de la création du l'utilisateur ", "danger");
            }
        })
            .catch((error) => {
                console.log("erreur se reproduit lors de la connexion " + error)
            })
            .finally(() => {
                setIsLoading(false);
            });


    }
    return (
        <div className='conatinerSignUp ' >
            {isLoading && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(0,0,0,0.3)",
                        zIndex: 100000,
                        height: height,
                    }}
                >
                    <div class="loaderLog"></div>
                </div>
            )}
            <div className='sub-div-containerSignup wow fadeInUp' data-wow-delay="0.1s" style={{ paddingBottom: '20px' }}>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='card mt-4 p-4  ' style={{ alignContent: 'center', justifyContent: 'center', textAlign: "center" }} >
                            <a href='/'>
                                <h1 class="fw-bold text-primary m-0">Agri<span class="text-secondary">Mar</span>Ket</h1>
                            </a>
                            <h4 class="mt-5 mb-3">Créez votre profile</h4>
                            <p className='mt-4'>
                                Créez votre Profil et profitez de la Plateforme, c'est totalement Gratuit !
                            </p>
                            {alertUser && alertUser.message !== "" && alertUser.type !== "" && (
                                <Alert key={alertUser.type} variant={alertUser.type} >
                                    {alertUser.message}
                                </Alert>
                            )}
                            {/* Step 1 Start */}
                            {step1 && (
                                <div>
                                    <p className='text-primary mt-3' style={{ textDecoration: 'underline' }}>Vouz êtes quoi ?</p>
                                    <div className='mt-4' style={{ display: "flex", gap: "20px", alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                                        <div
                                            style={{
                                                cursor: "pointer",
                                                border:
                                                    selectedCard === "Producteur" ? "2px solid #3cb815" : "1px solid #ccc",
                                                padding: "50px",
                                                borderRadius: "10px",
                                                textAlign: "center",
                                            }}
                                            onClick={() => handleCardClick("Producteur")}
                                        >
                                            <i class="fa-solid fa-tractor fa-lg text-primary fw-bold mt-3" style={{ color: "#63E6BE", fontSize: '50px' }}></i>
                                            <p className='mt-5'> Producteur  </p>
                                        </div>
                                        <div
                                            style={{
                                                cursor: "pointer",
                                                border:
                                                    selectedCard === "Acheteur" ? "2px solid #f65005" : "1px solid #ccc",
                                                padding: "50px",
                                                borderRadius: "10px",
                                                textAlign: "center",
                                            }}
                                            onClick={() => handleCardClick("Acheteur")}
                                        >
                                            <i class="fa-solid fa-cart-plus fa-lg text-secondary fw-bold mt-3" style={{ color: "#63E6BE", fontSize: '50px' }}></i>
                                            <p className='mt-5'> Acheteur  </p>
                                        </div>
                                    </div>
                                    <button
                                        class="btn btn-primary py-sm-3  rounded-pill mt-4 "
                                        onClick={() => step1tostep2()}
                                        style={{
                                            marginBottom: "40px",
                                            width: "100%",
                                            marginTop: '70px'
                                        }}
                                    >
                                        <span style={{ fontSize: '17px' }}>Passer à l'étape suivante</span>
                                        <i className="bi bi-arrow-right" style={{ marginLeft: '20px', }}></i>
                                    </button>
                                </div>
                            )}
                            {/* Step 1 End */}
                            {/* Step 2 start */}
                            {step2 && selectedCard === "Producteur" && (
                                <div>
                                    <Stepper>
                                        <Step label="Choisissez le type de votre compte ." className="bg-primary" />
                                        <Step label="Enregistrement des informations personnelles des agriculteurs . " className="bg-primary" />
                                        <Step label="Enregistrement des informations liées à la ferme et aux opérations de production ." className="bg-primary" />
                                    </Stepper>
                                    <div className='row' >
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='nom_prod' style={{ fontSize: '16px', fontWeight: '500' }}> Votre nom *	 :</label>
                                            <input type='text' placeholder='ALex Fernandes' name='nom_prod' className='form-control mt-1' value={nom_producteur} onChange={(e) => { setnom_producteur(e.target.value) }} />
                                        </div>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='pre_prod' style={{ fontSize: '16px', fontWeight: '500' }}> Votre prénom * :</label>
                                            <input type='text' placeholder='Emanuelle' name='pre_prod' className='form-control mt-1' value={prenom_producteur} onChange={(e) => { setprenom_producteur(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='tel_prod' style={{ fontSize: '16px', fontWeight: '500' }}> Téléphone * :</label>
                                            <input type='number' placeholder='+216 23 45 56 98' name='tel_prod' className='form-control mt-1' value={telephone} onChange={(e) => { setTelephone(e.target.value) }} />
                                        </div>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='adr_prod' style={{ fontSize: '16px', fontWeight: '500' }}> Votre adresse * :</label>
                                            <input type='text' placeholder='Tunisie , Tunis ' name='adr_prod' className='form-control mt-1' value={adresse} onChange={(e) => { setadresse(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='email_prod' style={{ fontSize: '16px', fontWeight: '500' }}> Email * :</label>
                                            <input type='email' placeholder='Emanuelle@gmail.com' name='email_prod' className='form-control mt-1' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='pass_prod' style={{ fontSize: '16px', fontWeight: '500' }}> Mot de passe * :</label>
                                            <input type='password' placeholder='********' name='pass_prod' className='form-control mt-1' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                                        </div>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='con_pass_prod' style={{ fontSize: '16px', fontWeight: '500' }}> Confirmez le mot de passe * :</label>
                                            <input type='password' placeholder='********' name='con_pass_prod' className='form-control mt-1' value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-6 text-left">
                                        </div>
                                        <div class="col-md-6 text-right">
                                            <button class="btn btn-primary rounded-pill py-2 px-5 rounded-pill ms-2" onClick={() => Step2toStep3Producteur()}>Passer à l'étape suivante  <i class="fa-solid fa-arrow-right" style={{ marginLeft: '10px' }}></i> </button>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {step2 && selectedCard === "Acheteur" && (
                                <div>
                                    <Stepper>
                                        <Step label="Choisissez le type de votre compte ." className="bg-primary" />
                                        <Step label="Enregistrement des informations du représentant de l'entreprise ." className="bg-primary" />
                                        <Step label="Enregistrement des informations de l'entreprise . " className="bg-primary" />
                                    </Stepper>

                                    <div className='row' >
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='nom_Acheteur' style={{ fontSize: '16px', fontWeight: '500' }}> Votre nom *	 :</label>
                                            <input type='text' placeholder='ALex Fernandes' name='nom_Acheteur' className='form-control mt-1' />
                                        </div>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='pre_Acheteur' style={{ fontSize: '16px', fontWeight: '500' }}> Votre prénom * :</label>
                                            <input type='text' placeholder='Emanuelle' name='pre_Acheteur' className='form-control mt-1' />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='tel_Acheteur' style={{ fontSize: '16px', fontWeight: '500' }}> Téléphone * :</label>
                                            <input type='number' placeholder='+216 23 45 56 98' name='tel_Acheteur' className='form-control mt-1' />
                                        </div>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='adr_Acheteur' style={{ fontSize: '16px', fontWeight: '500' }}> Votre adresse * :</label>
                                            <input type='text' placeholder='Tunisie , Tunis ' name='adr_Acheteur' className='form-control mt-1' />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='ServiceAcheteur' style={{ fontSize: '16px', fontWeight: '500' }}>Services  * :</label>
                                            <input list="ServiceAcheteur" name="ServiceAcheteur" className='form-control form-select mt-1' placeholder='Direction générale' />
                                            <datalist id="ServiceAcheteur">
                                                <option value="Direction générale" />
                                                <option value="Direction commerciale" />
                                                <option value="Direction technique" />
                                                <option value="Direction export" />
                                                <option value="Direction logistique" />
                                                <option value="Service des Achats" />
                                                <option value="Service de Transformation" />
                                                <option value="Service Exportation" />
                                                <option value="Autres" />
                                            </datalist>
                                        </div>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='FonctionAcheteur' style={{ fontSize: '16px', fontWeight: '500' }}>Fonction   * :</label>
                                            <input list="FonctionAcheteur" name="FonctionAcheteur" className='form-control form-select mt-1' placeholder='Directeur' />
                                            <datalist id="FonctionAcheteur">
                                                <option value="Directeur" />
                                                <option value="Fournisseur" />
                                                <option value="Distributeur en gros" />
                                                <option value="Responsable qualité" />
                                                <option value="Responsable logistique" />
                                                <option value="Responsable marketing" />
                                                <option value="Responsable commercial" />
                                                <option value="Responsable des achats" />
                                                <option value="Restaurateur" />
                                                <option value="Exportateur" />
                                                <option value="Autres" />
                                            </datalist>
                                        </div>
                                    </div>


                                    <div className='row mt-3'>
                                        <div className='col-lg-12' style={{ textAlign: 'left' }}>
                                            <label htmlFor='email_Acheteur' style={{ fontSize: '16px', fontWeight: '500' }}> Email * :</label>
                                            <input type='email' placeholder='Emanuelle@gmail.com' name='email_Acheteur' className='form-control mt-1' />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='pass_Acheteur' style={{ fontSize: '16px', fontWeight: '500' }}> Mot de passe * :</label>
                                            <input type='password' placeholder='********' name='pass_Acheteur' className='form-control mt-1' />
                                        </div>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='con_pass_Acheteur' style={{ fontSize: '16px', fontWeight: '500' }}> Confirmez le mot de passe * :</label>
                                            <input type='password' placeholder='********' name='con_pass_Acheteur' className='form-control mt-1' />
                                        </div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-6 text-left">
                                        </div>
                                        <div class="col-md-6 text-right">
                                            <button class="btn btn-primary rounded-pill ms-3" onClick={() => step2tostep3()}>Passer à l'étape suivante  <i class="fa-solid fa-arrow-right" style={{ marginLeft: '10px' }}></i> </button>
                                        </div>
                                    </div>

                                </div>
                            )}

                            {/* Step 2 End */}
                            {step3 && selectedCard === "Producteur" && (
                                <div>
                                    <Stepper>
                                        <Step label="Choisissez le type de votre compte ." className="bg-primary" />
                                        <Step label="Enregistrement des informations personnelles des agriculteurs . " className="bg-primary" />
                                        <Step label="Enregistrement des informations liées à la ferme et aux opérations de production ." className="bg-primary" />
                                    </Stepper>
                                    <div className='row'>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='nameAgricole' style={{ fontSize: '16px', fontWeight: '500' }}>Nom exploitation agricole * :</label>
                                            <input type='text' placeholder='Luxuri_Agri' name='nameAgricole' className='form-control mt-1' value={nom_exploitation_agricole} onChange={(e) => { setnom_exploitation_agricole(e.target.value) }} />
                                        </div>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='adresseAgricole' style={{ fontSize: '16px', fontWeight: '500' }}>Adresse exploitation  * :</label>
                                            <input type='text' placeholder='Tunisie , Beja ' name='adresseAgricole' className='form-control mt-1' value={emplacement_de_exploitation} onChange={(e) => { setemplacement_de_exploitation(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='SuperficieAgricole' style={{ fontSize: '16px', fontWeight: '500' }}>Superficie terres agricoles en (ha)  * :</label>
                                            <input type="number" name="Superficie" className='form-control mt-1' placeholder='3434 ha' min={1} value={superficie_terres_agricoles} onChange={(e) => { setsuperficie_terres_agricoles(e.target.value) }} />
                                        </div>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='TypeAgricole' style={{ fontSize: '16px', fontWeight: '500' }}>Type de culture agricole * :</label>
                                            <input list="TypeAgricole" name="TypeAgricole" className='form-control form-select mt-1' value={type_de_culture} onChange={(e) => { settype_de_culture(e.target.value) }} />
                                            <datalist id="TypeAgricole">
                                                <option value="Cultivation de céréales" />
                                                <option value="Culture des légumes" />
                                                <option value="Culture des fruits" />
                                                <option value="Culture des vergers" />
                                                <option value="Culture des fleurs" />
                                                <option value="Culture des fruits secs" />
                                                <option value="Culture de l'olivier" />
                                            </datalist>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-lg-12' style={{ textAlign: 'left' }}>
                                            <label htmlFor='CertificationAgricole' style={{ fontSize: '16px', fontWeight: '500' }} >Description exploitation agricole * :</label>
                                            <textarea className='form-control mt-1' cols={10} rows={4} value={description_exploitation} onChange={(e) => { setdescription_exploitation(e.target.value) }}></textarea>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='ModeAgricole' style={{ fontSize: '16px', fontWeight: '500' }} >Modes de production agricole * :</label>
                                            <input list="ModeAgricole" name="TypeAgricole" className='form-control form-select mt-1' value={modes_production} onChange={(e) => { setmodes_production(e.target.value) }} />
                                            <datalist id="ModeAgricole">
                                                <option value="Agriculture traditionnelle" />
                                                <option value="Agriculture biologique" />
                                                <option value="Agriculture durable" />
                                                <option value="Agriculture intelligente" />
                                                <option value="Agriculture aquaponique" />
                                            </datalist>
                                        </div>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='CertificationAgricole' style={{ fontSize: '16px', fontWeight: '500' }}>Les certifications agricoles * :</label>
                                            <input list="CertificationAgricole" name="CertificationAgricole" className='form-control form-select mt-1' value={certifications} onChange={(e) => { setcertifications(e.target.value) }} />
                                            <datalist id="CertificationAgricole">
                                                <option value="Certification Bio" />
                                                <option value="Certification HACCP" />
                                                <option value="Certification ISO" />
                                                <option value="Certification GLOBALG.A.P" />
                                                <option value="Certification Label Rouge" />
                                                <option value="Certification IFS" />
                                                <option value="Certification de conformité halal" />
                                            </datalist>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 mt-4' style={{ textAlign: 'left' }}>
                                        <label style={{ fontSize: '16px', fontWeight: '500' }}>Photos exploitation agricole * : </label>
                                    </div>
                                    <div className="App mt-4">
                                        <ImageUploading
                                            multiple
                                            value={images}
                                            onChange={onChange}
                                            maxNumber={maxNumber}
                                            dataURLKey="data_url"
                                        >
                                            {({
                                                imageList,
                                                onImageUpload,
                                                onImageRemoveAll,
                                                onImageRemove,
                                                isDragging,
                                                dragProps,
                                            }) => (
                                                // write your building UI
                                                <div>
                                                    <div
                                                        className="upload__image-wrapper dropzone d-flex justify-content-center align-items-center text-center"
                                                        onClick={onImageUpload}
                                                        {...dragProps}
                                                        style={
                                                            isDragging ? { color: "red" } : undefined
                                                        }
                                                    >
                                                        <div className="dz-message needsclick">
                                                            <div className="mb-3">
                                                                <i class="fa-solid fa-cloud-arrow-down display-4 text-primary"></i>
                                                            </div>

                                                            <h4>
                                                                Déposez les fichiers ici ou cliquez pour télécharger.                                                            </h4>
                                                        </div>
                                                    </div>
                                                    {imageList.length !== 0 && (
                                                        <button
                                                            className=" mt-3 btn  link text-danger"
                                                            onClick={onImageRemoveAll}
                                                        >
                                                            X Supprimer toutes les images
                                                        </button>
                                                    )}

                                                    <div className="container text-center w-100 p-3">
                                                        <div className="row">
                                                            {imageList.map((image, index) => (
                                                                <div className="col-md-2" key={index}>
                                                                    <div
                                                                        className="image-item"
                                                                        style={{
                                                                            width: 120,
                                                                            height: 120,
                                                                            paddingTop: 10,
                                                                            position: "relative",
                                                                        }}
                                                                    >

                                                                        <i class="fa-solid fa-circle-xmark"
                                                                            style={{
                                                                                color: "red",
                                                                                fontSize: 25,
                                                                                position: "absolute",
                                                                                right: -12,
                                                                                top: -11,
                                                                                cursor: "pointer",
                                                                            }}
                                                                            onClick={() =>
                                                                                onImageRemove(index)
                                                                            }>
                                                                        </i>
                                                                        <div className="shake-admin">
                                                                            <img
                                                                                className="image-admin-shake"
                                                                                style={{
                                                                                    borderRadius: 15,
                                                                                    width: 100,
                                                                                    height: 100,
                                                                                    border: "1px solid red",
                                                                                }}
                                                                                src={image["data_url"]}
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </ImageUploading>
                                    </div>
                                    <div className="row mt-3" style={{
                                        textAlign: "left"
                                    }}>
                                        <input type='checkbox' className='form-check-input' name='accept' id="accept" />
                                        <label htmlfor="accept" style={{ position: 'absolute', left: '40px', color: 'black', textDecoration: 'underline' }}>
                                            J'ai lu et j'accepte les conditions générales de vente et d'utilisation de la plateforme AgriMarKet *
                                        </label>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-6 text-left">
                                            <button class="btn btn-secondary rounded-pill py-2 px-5 rounded-pill ms-2" onClick={() => { ReturnStep() }}> <i class="fa-solid fa-arrow-left" style={{ marginRight: '10px' }}></i>   Retour à l'étape précédente</button>
                                        </div>
                                        <div class="col-md-6 text-right">
                                            <button class="btn btn-primary rounded-pill py-2 px-5 rounded-pill ms-2" onClick={SignupProducteur}>Commencez maintenant </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {step3 && selectedCard === "Acheteur" && (
                                <div>
                                    <Stepper>
                                        <Step label="Choisissez le type de votre compte ." className="bg-primary" />
                                        <Step label="Enregistrement des informations du représentant de l'entreprise ." className="bg-primary" />
                                        <Step label="Enregistrement des informations de l'entreprise ." className="bg-primary" />
                                    </Stepper>
                                    <div className='row'>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='nameEntreprise' style={{ fontSize: '16px', fontWeight: '500' }}>Nom de l'entreprise * :</label>
                                            <input type='text' placeholder='VedexAgri' name='nameEntreprise' className='form-control mt-1' />
                                        </div>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='ActiviteEntreprise' style={{ fontSize: '16px', fontWeight: '500' }}>Activité  * :</label>
                                            <input list="ActiviteEntreprise" name="ActiviteEntreprise" className='form-control form-select mt-1' placeholder='Supermarché' />
                                            <datalist id="ActiviteEntreprise">
                                                <option value="Supermarché" />
                                                <option value="Centrale d'achat" />
                                                <option value="Restaurants" />
                                                <option value="Distributeurs alimentaires" />
                                                <option value="Marchés de gros" />
                                                <option value="Exportateurs" />
                                                <option value="Industrie agroalimentaire" />
                                            </datalist>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-lg-4' style={{ textAlign: 'left' }}>
                                            <label htmlFor='AdresseEntreprise' style={{ fontSize: '16px', fontWeight: '500' }}>Adresse  * :</label>
                                            <input type="text" name="AdresseEntreprise" className='form-control mt-1' placeholder='Tunisie ' min={1} />
                                        </div>
                                        <div className='col-lg-4' style={{ textAlign: 'left' }}>
                                            <label htmlFor='VilleEntreprise' style={{ fontSize: '16px', fontWeight: '500' }}>Ville * :</label>
                                            <input type="text" name="VilleEntreprise" className='form-control mt-1' placeholder='Béja' min={1} />
                                        </div>
                                        <div className='col-lg-4' style={{ textAlign: 'left' }}>
                                            <label htmlFor='CodePostale' style={{ fontSize: '16px', fontWeight: '500' }}>Code postale * :</label>
                                            <input type="number" name="CodePostale" className='form-control mt-1' placeholder='1045' min={1} />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-lg-12' style={{ textAlign: 'left' }}>
                                            <label htmlFor='DescriptionEntreprise' style={{ fontSize: '16px', fontWeight: '500' }}>Description Entreprise * :</label>
                                            <textarea className='form-control mt-1' name='DescriptionEntreprise' cols={10} rows={4}></textarea>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='Emailentreprise' style={{ fontSize: '16px', fontWeight: '500' }}>Email entreprise * :</label>
                                            <input type='email' name="Emailentreprise" className='form-control mt-1' placeholder='VedexAgri@gmail.com' />
                                        </div>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='Telephoneentreprise' style={{ fontSize: '16px', fontWeight: '500' }}>Téléphone entreprise * :</label>
                                            <input type="number" name="Telephoneentreprise" className='form-control  mt-1' placeholder='216 71 73 98 34' />
                                        </div>
                                    </div>
                                    <div className='col-lg-6 mt-4' style={{ textAlign: 'left' }}>
                                        <label style={{ fontSize: '16px', fontWeight: '500' }}>Logo Entreprise * : </label>
                                    </div>
                                    <div className="App mt-4">
                                        <ImageUploading
                                            multiple
                                            value={images}
                                            onChange={onChange}
                                            maxNumber={maxNumber1}
                                            dataURLKey="data_url"
                                        >
                                            {({
                                                imageList,
                                                onImageUpload,
                                                onImageRemoveAll,
                                                onImageRemove,
                                                isDragging,
                                                dragProps,
                                            }) => (
                                                // write your building UI
                                                <>
                                                    <div
                                                        className="upload__image-wrapper dropzone d-flex justify-content-center align-items-center text-center"
                                                        onClick={onImageUpload}
                                                        {...dragProps}
                                                        style={
                                                            isDragging ? { color: "red" } : undefined
                                                        }
                                                    >
                                                        <div className="dz-message needsclick">
                                                            <div className="mb-3">
                                                                <i class="fa-solid fa-cloud-arrow-down display-4 text-primary"></i>
                                                            </div>

                                                            <h4>
                                                                Déposez le logo  ici ou cliquez pour télécharger.                                                            </h4>
                                                        </div>
                                                    </div>
                                                    {imageList.length !== 0 && (
                                                        <button
                                                            className=" mt-3 btn  link text-danger"
                                                            onClick={onImageRemoveAll}
                                                        >
                                                            X Supprimer l'image
                                                        </button>
                                                    )}
                                                    <div className="container text-center w-100 p-3">
                                                        <div className="row">
                                                            {imageList.map((image, index) => (
                                                                <div className="col-md-2" key={index}>
                                                                    <div
                                                                        className="image-item"
                                                                        style={{
                                                                            width: 120,
                                                                            height: 120,
                                                                            paddingTop: 10,
                                                                            position: "relative",
                                                                        }}
                                                                    >

                                                                        <i class="fa-solid fa-circle-xmark"
                                                                            style={{
                                                                                color: "red",
                                                                                fontSize: 25,
                                                                                position: "absolute",
                                                                                right: -12,
                                                                                top: -11,
                                                                                cursor: "pointer",
                                                                            }}
                                                                            onClick={() =>
                                                                                onImageRemove(index)
                                                                            }>
                                                                        </i>
                                                                        <div className="shake-admin">
                                                                            <img
                                                                                className="image-admin-shake"
                                                                                style={{
                                                                                    borderRadius: 15,
                                                                                    width: 100,
                                                                                    height: 100,
                                                                                    border: "1px solid red",
                                                                                }}
                                                                                src={image["data_url"]}
                                                                                alt=""
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </ImageUploading>
                                    </div>
                                    <div className="row mt-3" style={{
                                        textAlign: "left"
                                    }}>
                                        <input type='checkbox' className='form-check-input' name='accept' id="accept" />
                                        <label htmlfor="accept" style={{ position: 'absolute', left: '40px', color: 'black', textDecoration: 'underline' }}>
                                            J'ai lu et j'accepte les conditions générales de vente et d'utilisation de la plateforme AgriMarKet *
                                        </label>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-6 text-left">
                                            <button class="btn btn-secondary rounded-pill ms-3" onClick={() => { ReturnStep() }} > <i class="fa-solid fa-arrow-left" style={{ marginRight: '10px' }}></i>   Retour à l'étape précédente</button>
                                        </div>
                                        <div class="col-md-6 text-right">
                                            <button class="btn btn-primary rounded-pill ms-3">Commencez maintenant </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Registre