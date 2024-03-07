import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Apropos = () => {
    return (
        <div>
            <Header />
            {/* Page Header Start */}
            <div class="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
                <div class="container">
                    <h1 class="display-3 mb-3 animated slideInDown">À propos
                    </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><a class="text-body" href="#">Home</a></li>
                            <li class="breadcrumb-item"><a class="text-body" href="#">Pages</a></li>
                            <li class="breadcrumb-item text-dark active" aria-current="page">À propos</li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/*  Page Header End */}

            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-0 gx-5 align-items-end">
                        <div class="col-lg-6">
                            <div class="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                                <h1 class="display-5 mb-3">À propos de la Plateforme  AgriMarKet ?
                                </h1>
                                <p>À propos de la Plateforme  AgriMarKet ?
                                .</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Apropos