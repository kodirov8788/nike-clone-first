import React from 'react';
import './Carousel.css';
import CAROUSEL__DATA from '../../data/CAROUSEL_DATA.json';

function Carousel() {
    return (
        <div className="carousel">
           <div className="carousel__wrapper">
               {
               CAROUSEL__DATA.map(carouselItem => (
                    <div className="carousel__item">
                            <img src={carouselItem?.image} alt="" />
                            <h3>{carouselItem?.productName}</h3>
                    </div>
               ))
               }
           </div>
        </div>
    )
}

export default Carousel
