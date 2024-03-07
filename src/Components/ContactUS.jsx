import React from 'react'
import Header from './Header'
import Footer from './Footer'
const ContactUS = () => {
    return (
        <div>
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
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="name" placeholder="Votre nom" />
                                            <label for="name">Votre nom *</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Votre Email" />
                                            <label for="email">Votre Email *</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Sujet" />
                                            <label for="subject">Sujet *</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Votre Message" id="message" style={{ height: '200px' }}></textarea>
                                            <label for="message">Message *</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary rounded-pill py-3 px-5" type="submit">Envoyer Message</button>
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