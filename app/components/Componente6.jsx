import styles from '../styles/Componente6.module.css';

const Componente6 = () => {
  return (
    <section className={styles.differentialsSection}>
    <h2>Nossos diferenciais</h2>
    <h3>Porque nos contratar?</h3>
    <div className={styles.differentialsContent}>
      <div className={styles.differentialItem}>
        <img src="../icone4.svg" alt="Icon 1" className={styles.image4} />
        <h3>Expertise comprovado em isenções</h3>
        <p>Possuímos vasta experiência e conhecimento na área de isenção de Imposto de Renda por doença grave. Já ajudamos diversos aposentados e pensionistas a conquistarem esse direito.</p>
      </div>
      <div className={styles.differentialItem}>
        <img src="../icone5.svg" alt="Icon 2" className={styles.image5} />
        <h3>Atendimento Online e personalizado</h3>
        <p>Temos nossa sede para atendimentos presenciais em Brusque/SC, mas também atendemos online em todos os Estados do Brasil, oferecendo um atendimento individualizado e personalizado, com total atenção às suas necessidades e história.</p>
      </div>
      <div className={styles.differentialItem}>
        <img src="../icone6.svg" alt="Icon 3" className={styles.image5} />
        <h3>Total transparência</h3>
        <p>Somos 100% transparentes! Você será informado sobre todo o andamento do seu caso e de tudo que estamos fazendo. Estaremos ao seu lado em todas as etapas do processo, desde a análise da documentação até a entrega do pedido junto à Receita Federal ou ação Judicial.</p>
      </div>
    </div>
  </section>
  )};

  export default Componente6;