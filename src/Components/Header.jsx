import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
    const logout = () => {
        localStorage.removeItem("AgriMaketRole");
        localStorage.removeItem("AgriMaketNomAcheuteur");
        localStorage.removeItem("AgriMaketPrenomAcheuteur");
        localStorage.removeItem("AgriMaketNomProducteur");
        localStorage.removeItem("AgriMaketPrenomProducteur");
        localStorage.removeItem("AgriMaketUserId")
        window.location.reload();
    }
    return (
        <div class="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
            <div class="top-bar row gx-0 align-items-center d-none d-lg-flex">
                <div class="col-lg-6 px-5 text-start">
                    <small><i class="fa fa-map-marker-alt me-2"></i>46 Rue Khaireddine Becha , Tunis , Tunisie</small>
                    <small class="ms-4"><i class="fa fa-envelope me-2"></i>AgriMarket@gmail.com</small>
                </div>
                <div class="col-lg-6 px-5 text-end">
                    <small>Suivez-nous :</small>
                    <a class="text-body ms-3" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="text-body ms-3" href=""><i class="fab fa-twitter"></i></a>
                    <a class="text-body ms-3" href=""><i class="fab fa-linkedin-in"></i></a>
                    <a class="text-body ms-3" href=""><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <a href="/" class="navbar-brand ms-4 ms-lg-0">
                    <h1 class="fw-bold text-primary m-0">Agri<span class="text-secondary">Mar</span>Ket</h1>
                </a>
                <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto p-4 p-lg-0">
                        <a class="nav-item nav-link" href='/'>Accueil</a>
                        <a class="nav-item nav-link" href="/Apropos">À Propos</a>
                        <a class="nav-item nav-link" href="/ListProduct">Nos produits</a>

                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu m-0">
                                <a href="/AllAcualites" class="dropdown-item">Actualités</a>
                                <a href="/community" class="dropdown-item">Communauté</a>
                                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                <a href="404.html" class="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a class="nav-item nav-link" href='/ContactUS'>Contact</a>
                    </div>
                    <div class="d-none d-lg-flex ms-2">
                        <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
                            <small class="fa fa-search text-body"> </small>
                        </a>
                        <NavLink to="/Panier">
                            <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
                                <small class="fa fa-shopping-bag text-body"></small>
                            </a>
                        </NavLink>
                        {localStorage.getItem("AgriMaketRole") === "" || localStorage.getItem("AgriMaketRole") === null && (
                            <NavLink to="/Login">
                                <button className='btn btn-primary rounded-pill ms-3'>Se connecter</button>
                            </NavLink>
                        )}
                    </div>
                    {localStorage.getItem("AgriMaketRole") !== "" && localStorage.getItem("AgriMaketRole") !== null && (
                        <NavLink to="/">
                            <a class="nav-item nav-link" href='/'>
                                {localStorage.getItem("AgriMaketRole") === "acheteur" && (
                                    <span className='text-secondary' style={{ fontSize: '17px', textTransform: 'capitalize', fontWeight: '600' }}>  {localStorage.getItem("AgriMaketNomAcheuteur")} {' '} {localStorage.getItem("AgriMaketPrenomAcheuteur")}</span>
                                )}
                                {localStorage.getItem("AgriMaketRole") === "producteur" && (
                                    <span className='text-secondary dropdown-toggle' style={{ fontSize: '17px', textTransform: 'capitalize', fontWeight: '600' }} >
                                        {localStorage.getItem("AgriMaketNomProducteur")} {' '} {localStorage.getItem("AgriMaketPrenomProducteur")}
                                        <div class="dropdown-menu m-0">
                                            <a class="dropdown-item" onClick={logout} >Déconnexion</a>
                                            <a href="feature.html" class="dropdown-item">Our Features</a>
                                            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                            <a href="404.html" class="dropdown-item">404 Page</a>
                                        </div>

                                    </span>
                                )}
                            </a>
                        </NavLink>
                    )}
                </div>
            </nav >
        </div >
    )
}

export default Header