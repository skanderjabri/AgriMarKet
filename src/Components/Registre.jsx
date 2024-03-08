import React, { useState } from 'react'
import { Stepper, Step } from 'react-form-stepper';

const Registre = () => {
    const [selectedCard, setSelectedCard] = useState("");
    const [step1, setstep1] = useState(true);
    const [step2, setstep2] = useState(false);

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };
    const step1tostep2 = () => {
        setstep1(false);
        setstep2(true);
    }
    return (
        <div className='conatinerSignUp ' >
            <div className='sub-div-containerSignup wow fadeInUp' data-wow-delay="0.1s">
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
                                <div className='wow fadeInUp' data-wow-delay="0.1s">
                                    <Stepper>
                                        <Step label="Choisissez le type de votre compte ." className="bg-primary" />
                                        <Step label="Enregistrement des informations personnelles des agriculteurs . " className="bg-primary" />
                                        <Step label="Enregistrement des informations liées à la ferme et aux opérations de production" className="bg-primary" />
                                    </Stepper>
                                    <div className='row'  >
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='nom_prod' style={{ fontSize: '16px' }}> Nom producteur :</label>
                                            <input type='text' placeholder='ALex Fernandes' name='nom_prod' className='form-control mt-1' />
                                        </div>
                                        <div className='col-lg-6' style={{ textAlign: 'left' }}>
                                            <label htmlFor='pre_prod' style={{ fontSize: '16px' }}> Prénom producteur :</label>
                                            <input type='text' placeholder='Emanuelle' name='pre_prod' className='form-control mt-1' />
                                        </div>

                                        <div className='col-lg-6'>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Registre