import React, { useState, useEffect } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import { Divider } from 'antd';
import Alert from 'react-bootstrap/Alert';
import useAlert from '../Function/AlertBootsrap';
import LoginApi from '../Api/LoginApi';
const Login = () => {
  var height = window.innerHeight;
  var width = window.innerWidth;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { alertUser, showAlert, clearAlert } = useAlert();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const LoginUser = () => {
    if (email.trim() === "") {
      showAlert("Email obligatoire ", "danger");
      return;
    }
    if (password.trim() === "") {
      showAlert("Mot de passe obligatoire ", "danger");
      return;
    }
    clearAlert();
    setIsLoading(true)
    LoginApi(email, password)
      .then((response) => {
        if (response.data.message === "Utilisateur non trouve") {
          showAlert("Utilisateur non trouvé ! ", "danger");
        }
        else if (response.data.message === "Mot de passe incorrect") {
          showAlert("Mot de passe incorrect ! ", "danger");
        }
        else if (response.data.message === "ok") {
          localStorage.setItem("AgriMaketRole", response.data.user.role)
          if (response.data.user.role === "acheteur") {
            localStorage.setItem("AgriMaketNomAcheuteur", response.data.user.nom_representant_entreprise)
            localStorage.setItem("AgriMaketPrenomAcheuteur", response.data.user.prenom_representant_entreprise)
            localStorage.setItem("AgriMaketUserId", response.data.user._id)

          }
          else if (response.data.user.role === "producteur") {
            localStorage.setItem("AgriMaketNomProducteur", response.data.user.nom_producteur)
            localStorage.setItem("AgriMaketPrenomProducteur", response.data.user.prenom_producteur)
            localStorage.setItem("AgriMaketUserId", response.data.user._id)
          }
          navigate('/')
          window.location.reload();
        }
        else {
          showAlert("Erreur dans l'envoi du demande !", "danger");
        }
      })
      .catch((error) => {
        console.log("erreur se reproduit lors de la connexion " + error)
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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


              <h4 class="mt-4 mb-3">Se connecter</h4>
              <p className='mt-4'>
                Connectez-vous pour découvrir les articles disponibles et prendre  <br />part aux ventes proposées sur notre plateforme              </p>
              {alertUser && alertUser.message !== "" && alertUser.type !== "" && (
                <Alert key={alertUser.type} variant={alertUser.type} >
                  {alertUser.message}
                </Alert>
              )}
              <div className='row mt-4' style={{ textAlign: 'left' }}>
                <label htmlFor='email' style={{ fontSize: '16px', fontWeight: '500' }}> Votre email *	 :</label>
                <input type='email' placeholder='alex@gmail.com' name='email' className='form-control mt-1' value={email} onChange={(e) => { setEmail(e.target.value) }} />
              </div>
              <div className='row mt-3' style={{ textAlign: 'left' }}>
                <label htmlFor='password' style={{ fontSize: '16px', fontWeight: '500' }}> Votre mot de passe *	 :</label>
                <input type='password' placeholder='*******' name='email' className='form-control mt-1' value={password} onChange={(e) => { setPassword(e.target.value) }} />
              </div>
              <div className='row mt-3' style={{ textAlign: 'right' }}>
                <p className="text-primary" style={{ fontWeight: '500', cursor: 'pointer' }}> Mot de passe oublié ?</p>
              </div>
              <div class="row mt-4">
                <div class="col-md-12 ">
                  <button class="btn btn-primary rounded-pill py-2 px-5 rounded-pill ms-2" onClick={() => LoginUser()}> Me connecter</button>
                </div>
              </div>
              <Divider plain> <span style={{ fontSize: '18px', color: "#555555" }}>Ou</span></Divider>
              <div class="row ">
                <div class="col-md-12 ">
                  <a href='/registre'>
                    <button class="btn btn-secondary rounded-pill py-2 px-5 rounded-pill ms-2"> Créer mon compte gratuitement </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div >

  )
}

export default Login