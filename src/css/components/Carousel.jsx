import React from "react";


export default function Carousel() {
    return (
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item">
                    <img src="helado-chocolate.png" className="carousel-img" alt="Helado de chocolate" />
                </div>
                <div class="carousel-item active">
                    <img src="helado-vainilla.png" className="carousel-img" alt="Helado de vainilla" />
                </div>
                <div class="carousel-item">
                    <img src="helado-frutilla.png" className="carousel-img" alt="Helado de frutilla" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}