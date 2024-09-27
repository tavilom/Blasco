import styles from '../styles/Componente4.module.css';

const Componente4 = () => {
  return (
    <section className={styles.hero}>
      <h2>Como a isenção pode te ajudar?</h2>
      <div className={styles.benefits}>
        <div className={styles.benefitItem}>
          <img src="../icone1.svg" alt="Icon 1" className={styles.image1} />
          <h3>Aliviar o peso financeiro em um momento delicado</h3>
          <p>
            Enfrentar uma doença grave já traz consigo diversos desafios físicos, emocionais e sociais. A isenção garante
            que você, não precise se preocupar com mais um gasto nesse momento tão difícil. Imagine o alívio que essa
            economia pode trazer para você e sua família, permitindo que você se concentre no que realmente importa: sua
            saúde e bem-estar.
          </p>
        </div>
        <div className={styles.benefitItem}>
          <img src="../icone2.svg" alt="Icon 2" className={styles.image2} />
          <h3>Mais recursos para cuidar da sua saúde</h3>
          <p>
            O valor que você deixa de pagar em Imposto de Renda pode ser utilizado para cobrir despesas com medicamentos,
            tratamentos, consultas especializadas, exames, terapias e tudo o que for necessário para cuidar da sua saúde
            da melhor maneira possível.
          </p>
        </div>
        <div className={styles.benefitItem}>
          <img src="../icone3.svg" alt="Icon 3" className={styles.image3} />
          <h3>Restituição dos valores pagos indevidamente</h3>
          <p>
            Se você já pagou Imposto de Renda sobre seus rendimentos de aposentadoria ou pensão nos últimos 5 anos, você
            tem direito à restituição dos valores pagos indevidamente. Essa quantia pode ser um importante suporte
            financeiro para você e sua família nesse momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Componente4;
