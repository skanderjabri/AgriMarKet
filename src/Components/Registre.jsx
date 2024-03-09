import React, { useState } from 'react'
import { Stepper, Step } from 'react-form-stepper';
import ImageUploading from 'react-images-uploading';

const Registre = () => {
    const [selectedCard, setSelectedCard] = useState("");
    const [step1, setstep1] = useState(true);
    const [step2, setstep2] = useState(false);
    const [step3, setstep3] = useState(false);
    const [images, setImages] = useState([]);
    const maxNumber = 10;
    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
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

    return (
        <div className='conatinerSignUp ' >
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
                            {/*   <Stepper>
                                <Step label="Choisissez le type de votre compte ." className="bg-primary" completed={true} />
                                <Step label="Commençons par créer votre compte entreprise. " className="bg-primary" />
                                <Step label="Créer le compte du représentant de l'entreprise." className="bg-primary" />
                            </Stepper> */}
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
                                <div className='wow fadeInUp' data-wow-delay="0.1s" >
                                    <Stepper>
                                        <Step label="Choisissez le type de votre compte ." className="bg-primary" />
                                        <Step label="Enregistrement des informations personnelles des agriculteurs . " className="bg-primary" />
                                        <Step label="Enregistrement des informations liées à la ferme et aux opérations de production ." className="bg-primary" />
                                    </Stepper>
                                    <div className='row' >
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='nom_prod' style={{ fontSize: '16px', fontWeight: '500' }}> Votre nom *	 :</label>
                                            <input type='text' placeholder='ALex Fernandes' name='nom_prod' className='form-control mt-1' />
                                        </div>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='pre_prod' style={{ fontSize: '16px', fontWeight: '500' }}> Votre prénom * :</label>
                                            <input type='text' placeholder='Emanuelle' name='pre_prod' className='form-control mt-1' />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='tel_prod' style={{ fontSize: '16px', fontWeight: '500' }}> Téléphone * :</label>
                                            <input type='number' placeholder='+216 23 45 56 98' name='tel_prod' className='form-control mt-1' />
                                        </div>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='adr_prod' style={{ fontSize: '16px', fontWeight: '500' }}> Votre adresse * :</label>
                                            <input type='text' placeholder='Tunisie , Tunis ' name='adr_prod' className='form-control mt-1' />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='email_prod' style={{ fontSize: '16px', fontWeight: '500' }}> Email * :</label>
                                            <input type='email' placeholder='Emanuelle@gmail.com' name='email_prod' className='form-control mt-1' />
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='pass_prod' style={{ fontSize: '16px', fontWeight: '500' }}> Mot de passe * :</label>
                                            <input type='password' placeholder='********' name='pass_prod' className='form-control mt-1' />
                                        </div>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='con_pass_prod' style={{ fontSize: '16px', fontWeight: '500' }}> Confirmez le mot de passe * :</label>
                                            <input type='password' placeholder='********' name='con_pass_prod' className='form-control mt-1' />
                                        </div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-6 text-left">
                                            <button class="btn btn-secondary rounded-pill ms-3"> <i class="fa-solid fa-arrow-left" style={{ marginRight: '10px' }}></i>   Retour à l'étape précédente</button>
                                        </div>
                                        <div class="col-md-6 text-right">
                                            <button class="btn btn-primary rounded-pill ms-3" onClick={() => step2tostep3()}>Passer à l'étape suivante  <i class="fa-solid fa-arrow-right" style={{ marginLeft: '10px' }}></i> </button>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {step2 && selectedCard === "Acheteur" && (
                                <div>
                                    Acheteur
                                </div>
                            )}

                            {/* Step 2 End */}
                            {step3 && selectedCard === "Producteur" && (
                                <div className='wow fadeInUp' data-wow-delay="0.1s" >
                                    <Stepper>
                                        <Step label="Choisissez le type de votre compte ." className="bg-primary" />
                                        <Step label="Enregistrement des informations personnelles des agriculteurs . " className="bg-primary" />
                                        <Step label="Enregistrement des informations liées à la ferme et aux opérations de production ." className="bg-primary" />
                                    </Stepper>
                                    <div className='row'>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='nameAgricole' style={{ fontSize: '16px', fontWeight: '500' }}>Nom exploitation agricole * :</label>
                                            <input type='text' placeholder='Luxuri_Agri' name='nameAgricole' className='form-control mt-1' />
                                        </div>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='adresseAgricole' style={{ fontSize: '16px', fontWeight: '500' }}>Adresse exploitation  * :</label>
                                            <input type='text' placeholder='Tunisie , Beja ' name='adresseAgricole' className='form-control mt-1' />
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='SuperficieAgricole' style={{ fontSize: '16px', fontWeight: '500' }}>Superficie terres agricoles en (ha)  * :</label>
                                            <input type="number" name="Superficie" className='form-control mt-1' placeholder='3434 ha' min={1} />
                                        </div>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='TypeAgricole' style={{ fontSize: '16px', fontWeight: '500' }}>Type de culture agricole * :</label>
                                            <input list="TypeAgricole" name="TypeAgricole" className='form-control form-select mt-1' />
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
                                            <label htmlFor='CertificationAgricole' style={{ fontSize: '16px', fontWeight: '500' }}>Description exploitation agricole * :</label>
                                            <textarea className='form-control mt-1' cols={10} rows={4}></textarea>
                                        </div>
                                    </div>
                                    <div className='row mt-2'>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='ModeAgricole' style={{ fontSize: '16px', fontWeight: '500' }}>Modes de production agricole * :</label>
                                            <input list="ModeAgricole" name="TypeAgricole" className='form-control form-select mt-1' />
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
                                            <input list="CertificationAgricole" name="CertificationAgricole" className='form-control form-select mt-1' />
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
                                            <button class="btn btn-secondary rounded-pill ms-3"> <i class="fa-solid fa-arrow-left" style={{ marginRight: '10px' }}></i>   Retour à l'étape précédente</button>
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