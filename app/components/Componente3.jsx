import styles from '../styles/Componente3.module.css';

const Componente3 = () => {
  return (
    <section className={styles.hero}>
      <h2>Quem tem direito à essa isenção de imposto de renda?</h2>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <p>
            Qualquer pessoa que receba rendimentos de aposentadoria, pensão ou
            reforma, seja do INSS, de entidades públicas ou privadas, e que tenha
            tido ou tem alguma das seguintes doenças:
          </p>
        </div>
        <div className={styles.middleColumn}>
          <ul>
            <li>AIDS (Síndrome da Imunodeficiência Adquirida)</li>
            <li>Alienação Mental</li>
            <li>Cardiopatia Grave</li>
            <li>Cegueira (inclusive monocular)</li>
            <li>Contaminação por Radiação</li>
            <li>Doença de Paget em estados avançados (Osteíte Deformante)</li>
            <li>Doença de Parkinson</li>
            <li>Hanseníase</li>
          </ul>
        </div>
        <div className={styles.rightColumn}>
          <ul>
            <li>Nefropatia Grave</li>
            <li>Hepatopatia Grave</li>
            <li>Neoplasia Maligna</li>
            <li>Paralisia Irreversível e Incapacitante</li>
            <li>Tuberculose Ativa</li>
            <li>Esclerose Múltipla</li>
            <li>Espondiloartrose Anquilosante</li>
            <li>Fibrose Cística (Mucoviscidose)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Componente3;
