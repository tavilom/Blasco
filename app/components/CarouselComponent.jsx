import React from 'react';
import styles from '../styles/CarouselComponent.module.css';

export default function CarouselComponent() {
  return (
    <section>
      <div id="carousel" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../foto3.jpeg"
              className="d-block w-100"
              alt="First slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className={styles.letra1}>Blasco Advogados</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="../foto4.jpeg"
              className="d-block w-100"
              alt="Second slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className={styles.letra2}>Blasco Advogados</h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
