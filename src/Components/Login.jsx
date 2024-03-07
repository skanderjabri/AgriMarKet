import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
const Login = () => {
  return (
    <div>
      <Header />
      <div class="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
        <div class="container">
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb mb-0">
            </ol>
          </nav>
        </div>
      </div>
      <div>


        <div className="container-xxl py-5">
          <div className="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
                  <h1 class="display-5 mb-3">Se connecter</h1>
                  <p> Connectez-vous pour découvrir les articles disponibles et prendre part aux ventes proposées sur notre plateforme. </p>
                </div>
                <div className='row'>
                  <div className="col-lg-12">
                    <label htmlFor='email'>Email : </label>
                    <input type='email' className='form-control' />
                  </div>
                  <div className="col-lg-12" style={{ marginTop: '25px' }}>
                    <label htmlFor='email'>Mot de passe : </label>
                    <input type='password' className='form-control' />
                  </div>
                  <div className="col-lg-6 text-primary pointer-select" style={{ marginTop: '30px' }}>
                    Mot de passe oublié ?
                  </div>
                  <div className="col-lg-6 d-flex justify-content-end"
                    style={{
                      marginTop: '10px'
                    }}>
                    <button className='btn btn-primary rounded-pill py-3 px-5 '>Se connecter</button>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 mt-5 " >
                <h4 >Pas encore enregistré ?</h4>
                <p className='mt-3'>
                  La création d'un nouveau compte est facile et prend moins d'une minute.
                </p>
                <NavLink to="/registre">
                  <p className='mt-3 text-primary pointer-select'>
                    S'inscrire pour un nouveau compte
                  </p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>


  )
}

export default Login