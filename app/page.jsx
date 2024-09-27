'use client';

import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './page.module.css';
import Footer from './components/Footer';

import CarouselComponent from 'components/CarouselComponent';
import Componente1 from './components/Componente1';
import Componente2 from './components/Componente2';
import Componente3 from './components/Componente3';
import Componente4 from './components/Componente4';
import Componente5 from './components/Componente5';
import Componente6 from './components/Componente6';
import Componente7 from './components/Componente7';


export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const bootstrap = require('bootstrap');
      
      const carouselElement = document.getElementById('carousel');
      if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
          interval: 2000,
          wrap: true,
        });
      }

      const accordionElements = document.querySelectorAll('.accordion');
      accordionElements.forEach((accordionElement) => {
        new bootstrap.Collapse(accordionElement, {
          toggle: false,
        });
      });

      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <CarouselComponent />
        <Componente1 />
        <Componente2 />
        <Componente3 />
        <Componente4 />
        <Componente5 />
        <Componente6 />
        <Componente7 />
      </main>
      <Footer />
    </div>
  );
}
