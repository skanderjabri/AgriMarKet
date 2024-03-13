import React from 'react'
import Header from './Header'
import Footer from './Footer'
const NotFound = () => {
    return (
        <div>
            <Header />
            <div class="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <h1 class="display-3 mb-3 animated slideInDown">404 Error</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><a class="text-body" href="#">Home</a></li>
                            <li class="breadcrumb-item"><a class="text-body" href="#">Pages</a></li>
                            <li class="breadcrumb-item text-dark active" aria-current="page">404 Error</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="container-xxl py-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container text-center">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <i class="bi bi-exclamation-triangle display-1 text-primary"></i>
                            <h1 class="display-1">404</h1>
                            <h1 class="mb-4">Page non trouvée</h1>
                            <p class="mb-4">Nous sommes désolés, la page que vous recherchez n'existe pas sur notre site ! Peut-être aller sur notre page d'accueil ou essayer d'utiliser une recherche ?</p>
                            <a class="btn btn-primary rounded-pill py-3 px-5" href="/">Retournez à la page d'accueil</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound