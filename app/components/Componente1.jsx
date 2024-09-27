import React from 'react';
import styles from '../styles/Componente1.module.css';

const Componente1 = () => {
  return (
    <section className={styles.hero}>
      <h1>
        Precisa de um advogado especializado em isenção de imposto de renda
        para pessoas com doença grave?
      </h1>
      <p>
        Nós da <span className={styles.span}>Blasco Advogados,</span> somos um
        escritório familiar, com mais de 15 anos de experiência,
        especializado em direito tributário, previdenciário e civil.
      </p>
      <p>
        Somos sediados em Brusque/SC, mas atendemos clientes de todo o Brasil, de
        forma 100% on-line com agilidade, transparência e qualidade.
      </p>
    </section>
  );
};

export default Componente1;
