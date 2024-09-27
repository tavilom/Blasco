import styles from '../styles/Componente7.module.css';

const Componente7 = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <h2>Entre em contato conosco!</h2>
      <div className={styles.contactContent}>
        <div className={styles.contactDetails}>
          <p><strong>E-mail:</strong> <a href="mailto:contato@blascoadvogados.com.br">contato@blascoadvogados.com.br</a></p>
          <p><strong>Site:</strong> <a href="http://www.blascoadvogados.com.br">www.blascoadvogados.com.br</a></p>
          <p><strong>Telefone:</strong> (53) 9999-7706</p>
          <p><strong>WhatsApp:</strong> (53) 9999-7706</p>
          <p><strong>Endereço:</strong> Rua Torres, 44, Steffen, Brusque/SC, CEP 88.355-170</p>
          <p>
            Nós atendemos de segunda a sexta-feira, das 9h às 18h, e aos sábados, das 9h às 12h. 
            Nós respondemos a todas as mensagens em até 24 horas. Ficaremos felizes em ouvir você 
            e te ajudar a resolver o seu problema.
          </p>
        </div>
        <div className={styles.contactMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0586410506873!2d-49.00636292358583!3d-27.098280721011506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df2745c9874f5f%3A0x21b2f8e2a5e4b86e!2sR.%20Torres%2C%2044%20-%20Steffen%2C%20Brusque%20-%20SC%2C%2088355-170%2C%20Brazil!5e0!3m2!1sen!2sus!4v1675074295867!5m2!1sen!2sus"
            allowFullScreen={false}
            loading="lazy"
            title="Location"
          ></iframe>
        </div>
      </div>

      <a
        href="https://api.whatsapp.com/send?phone=555399977106&text=Ol%C3%A1,%20preciso%20conversar%20com%20um%20advogado"
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="Fale conosco no WhatsApp!"
      >
        <i className={`bi bi-whatsapp ${styles.whatsappIcon}`}></i>
      </a>
    </section>
  );
};

export default Componente7;
