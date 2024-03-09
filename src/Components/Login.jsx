import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Divider } from 'antd';
const Login = () => {
  return (
    <div className='conatinerSignUp ' >
      <div className='sub-div-containerSignup wow fadeInUp' data-wow-delay="0.1s" style={{ paddingBottom: '20px' }}>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='card mt-4 p-4  ' style={{ alignContent: 'center', justifyContent: 'center', textAlign: "center" }} >
              <a href='/'>
                <h1 class="fw-bold text-primary m-0">Agri<span class="text-secondary">Mar</span>Ket</h1>
              </a>
              <h4 class="mt-5 mb-3">Se connecter</h4>
              <p className='mt-4'>
                Connectez-vous pour découvrir les articles disponibles et prendre  <br />part aux ventes proposées sur notre plateforme              </p>

              <div className='row mt-4' style={{ textAlign: 'left' }}>
                <label htmlFor='email' style={{ fontSize: '16px', fontWeight: '500' }}> Votre email *	 :</label>
                <input type='email' placeholder='alex@gmail.com' name='email' className='form-control mt-1' />
              </div>
              <div className='row mt-3' style={{ textAlign: 'left' }}>
                <label htmlFor='password' style={{ fontSize: '16px', fontWeight: '500' }}> Votre mot de passe *	 :</label>
                <input type='password' placeholder='*******' name='email' className='form-control mt-1' />
              </div>
              <div className='row mt-3' style={{ textAlign: 'right' }}>
                <p className="text-primary" style={{ fontWeight: '500', cursor: 'pointer' }}> Mot de passe oublié ?</p>
              </div>
              <div class="row mt-4">
                <div class="col-md-12 ">
                  <button class="btn btn-primary rounded-pill ms-4"> Me connecter</button>
                </div>
              </div>
              <Divider plain> <span style={{ fontSize: '18px', color: "#555555" }}>Ou</span></Divider>
              <div class="row ">
                <div class="col-md-12 ">
                  <a href='/registre'>
                    <button class="btn btn-secondary rounded-pill ms-4"> Créer mon compte gratuitement </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login