import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAlert from '../Function/AlertBootsrap';
import { Alert } from 'react-bootstrap';
import CreateContactApi from '../Api/CreateContactApi';
const ContactUS = () => {
    const { alertUser, showAlert, clearAlert } = useAlert();
    const [nom, setnom] = useState("");
    const [email, setemail] = useState("");
    const [sujet, setsujet] = useState("");
    const [contenu, setcontenu] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    var height = window.innerHeight;
    var width = window.innerWidth;

    const SendMessage = (e) => {
        e.preventDefault();
        if (!nom.trim()) {
            showAlert("Nom obligatoire !", "danger");
            return;
        }
        if (!email.trim()) {
            showAlert("Email obligatoire !", "danger");
            return;
        }
        if (!sujet.trim()) {
            showAlert("Sujet obligatoire !", "danger");
            return;
        }
        if (!contenu.trim()) {
            showAlert("Message obligatoire !", "danger");
            return;
        }
        clearAlert();
        setIsLoading(true)
        CreateContactApi(nom, email, sujet, contenu)
            .then((response) => {
                if (response.data.message === "ok") {
                    setIsLoading(false)
                    toast.success("Le message a été envoyé avec succès.");
                    setemail("");
                    setnom("");
                    setsujet("");
                    setcontenu("");
                }
                else {
                    toast.error("Une erreur survient lors de l'envoi du message.");
                }
            })
    }
    return (
        <div>
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
            <Header />
            {/* Page Header Start */}
            <div class="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <h1 class="display-3 mb-3 animated slideInDown">Contact Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><a class="text-body" href="#">Home</a></li>
                            <li class="breadcrumb-item"><a class="text-body" href="#">Pages</a></li>
                            <li class="breadcrumb-item text-dark active" aria-current="page">Contactez-nous</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/*  Page Header End */}
            {/*   Contact Start */}
            <div class="container-xxl py-6">
                <div class="container">
                    <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                        <h1 class="display-5 mb-3">Contactez-nous
                        </h1>
                        <p> Vous avez des questions , écrivez-nous ?
                            .</p>
                    </div>
                    <div class="row g-5 justify-content-center">

                        <div class="col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="bg-primary text-white d-flex flex-column justify-content-center h-100 p-5">
                                <h5 class="text-white">Appelez-nous
                                </h5>

                                <p class="mb-5"><i class="fa fa-phone-alt me-3"></i>+216 29 08 22 45</p>
                                <h5 class="text-white">Envoyez-nous un email
                                </h5>
                                <p class="mb-5"><i class="fa fa-envelope me-3"></i>AgriMarket@gmail.com</p>
                                <h5 class="text-white">Nous sommes ici
                                </h5>
                                <p class="mb-5"><i class="fa fa-map-marker-alt me-3"></i>46 Rue Khaireddine Becha , Tunis , Tunisie</p>
                                <h5 class="text-white">Suivez-nous </h5>
                                <div class="d-flex pt-2">
                                    <a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-youtube"></i></a>
                                    <a class="btn btn-square btn-outline-light rounded-circle me-0" href=""><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <p class="mb-4">   Nous sommes très fiers de tout ce que nous faisons, un contrôle complet sur les produits nous permet de nous assurer que les clients reçoivent le meilleur service
                                .</p>
                            <form>
                                {alertUser && alertUser.message !== "" && alertUser.type !== "" && (
                                    <Alert key={alertUser.type} variant={alertUser.type} >
                                        {alertUser.message}
                                    </Alert>
                                )}
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="name" placeholder="Votre nom" value={nom} onChange={(e) => setnom(e.target.value)} />
                                            <label for="name">Votre nom *</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Votre Email" value={email} onChange={(e) => setemail(e.target.value)} />
                                            <label for="email">Votre Email *</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Sujet" value={sujet} onChange={(e) => setsujet(e.target.value)} />
                                            <label for="subject">Sujet *</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Votre Message" id="message" style={{ height: '200px' }} value={contenu} onChange={(e) => setcontenu(e.target.value)}></textarea>
                                            <label for="message">Message *</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary rounded-pill py-3 px-5" type="button" onClick={SendMessage}>Envoyer Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
            {/*  Contact End */}
            {/* Google Map Start */}
            <div class="container-xxl px-0 wow fadeIn" data-wow-delay="0.1s" style={{ marginBottom: '-6px' }}>
                <iframe class="w-100" style={{ height: '450px' }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.5977500173617!2d10.179606715846614!3d36.81881097994652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145ebe2b1b3d8499%3A0xf8686e704f25cefc!2sTunis%2C%20Tunisia!5e0!3m2!1sen!2sus!4v1603794290143!5m2!1sen!2sus"
                    frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
            {/* Google Map End */}

            <Footer />
        </div >
    )
}

export default ContactUS