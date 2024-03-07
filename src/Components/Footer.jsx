import React from 'react'

const Footer = () => {
    return (
        <div>

            {/* Footer Start*/}
            <div class="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-3 col-md-6">
                            <h1 class="fw-bold text-primary mb-4">Agri<span class="text-secondary">Mar</span>Ket</h1>
                            <p style={{ textAlign: 'justify' }}>AgriMarket est une plateforme globale dont la mission est de renforcer l'autonomie des agriculteurs en les informant et en leur offrant un accès direct aux marchés commerciaux pour vendre leurs produits à des prix équitables.
                            </p>
                            <div class="d-flex pt-2">
                                <a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-square btn-outline-light rounded-circle me-1" href=""><i class="fab fa-youtube"></i></a>
                                <a class="btn btn-square btn-outline-light rounded-circle me-0" href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-light mb-4">Address</h4>
                            <p><i class="fa fa-map-marker-alt me-3"></i>46 Rue Khaireddine Becha , Tunis , Tunisie</p>
                            <p><i class="fa fa-phone-alt me-3"></i>+216 29 08 22 45</p>
                            <p><i class="fa fa-envelope me-3"></i>AgriMarket@gmail.com</p>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-light mb-4">Liens rapides</h4>
                            <a class="btn btn-link" href="">About Us</a>
                            <a class="btn btn-link" href="">Contactez-nous
                            </a>
                            <a class="btn btn-link" href="">Our Services</a>
                            <a class="btn btn-link" href="">Terms & Condition</a>
                            <a class="btn btn-link" href="">Support</a>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="text-light mb-4">Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div class="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                                <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid copyright">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a href="#">Your Site Name</a>, All Right Reserved.
                            </div>
                            <div class="col-md-6 text-center text-md-end">
                                Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                                <br />Distributed By: <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Start*/}
        </div>
    )
}

export default Footer