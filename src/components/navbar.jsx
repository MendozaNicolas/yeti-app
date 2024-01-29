
import React from 'react'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-transparent fixed-top" data-bs-theme="dark">
            <div class="container-fluid">
                <a className="navbar-brand mx-5" href="#">
                    <img src="./images/yeti-logo.png" alt="Yeti Helados" width="48px" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="#products">PRODUCTOS</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="/contact">CONTACTOS</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}