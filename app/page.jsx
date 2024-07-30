// app/page.jsx
'use client';

import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styles from './page.module.css';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const bootstrap = require('bootstrap');
      const carouselElement = document.getElementById('carousel');
      new bootstrap.Carousel(carouselElement, {
        interval: 2000,
        wrap: true,
      });

      // Initialize all accordions
      const accordionElements = document.querySelectorAll('.accordion');
      accordionElements.forEach((accordionElement) => {
        new bootstrap.Collapse(accordionElement, {
          toggle: false,
        });
      });

      // Initialize tooltips
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
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
                  <h5>Blasco Advogados</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="../foto4.jpeg"
                  className="d-block w-100"
                  alt="Second slide"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Blasco Advogados</h5>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <section className={styles.hero}>
          <h1>
            Precisa de um advogado especializado em isenção de imposto de renda
            para pessoas com doença grave?
          </h1>
          <p>
            Nós da{' '}
            <span className={styles.span}>Blasco Advogados,</span> somos um
            escritório familiar, com mais de 15 anos de experiência,
            especializado em direito tributário, previdenciário e civil.
            <p>
              Somos sediados em Brusque/SC, mas atendemos clientes de todo o
              Brasil, de forma 100% on-line com agilidade, transparência e
              qualidade.
            </p>
          </p>
        </section>

        <section className={styles.hero}>
          <h2>O que é a isenção de imposto de renda por doença grave?</h2>
          <p>
            A isenção de imposto de renda por doença grave é um direito
            garantido pela lei federal nº 7.713/88, que permite que as pessoas
            que sofrem de determinadas doenças graves fiquem dispensadas de
            pagar imposto de renda sobre os seus rendimentos.
          </p>
        </section>

        <section className={styles.hero}>
          <h2>Quem tem direito à essa isenção de imposto de renda?</h2>
          <div className={styles.content}>
            <div className={styles.leftColumn}>
              <p>
                Qualquer pessoa que receba rendimentos de aposentadoria, pensão
                ou reforma, seja do INSS, de entidades públicas ou privadas, e
                que tenha tido ou tem alguma das seguintes doenças:
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

        <section className={styles.hero}>
          <h2>Como a isenção pode te ajudar?</h2>
          <div className={styles.benefits}>
            <div className={styles.benefitItem}>
              <img src="../icone1.svg" alt="Icon 1" className={styles.image1} />
              <h3>Aliviar o peso financeiro em um momento delicado</h3>
              <p>Enfrentar uma doença grave já traz consigo diversos desafios físicos, emocionais e sociais. A isenção garante que você, não precise se preocupar com mais um gasto nesse momento tão difícil. Imagine o alívio que essa economia pode trazer para você e sua família, permitindo que você se concentre no que realmente importa: sua saúde e bem-estar.</p>
            </div>
            <div className={styles.benefitItem}>
              <img src="../icone2.svg" alt="Icon 2" className={styles.image2} />
              <h3>Mais recursos para cuidar da sua saúde</h3>
              <p>O valor que você deixa de pagar em Imposto de Renda pode ser utilizado para cobrir despesas com medicamentos, tratamentos, consultas especializadas, exames, terapias e tudo o que for necessário para cuidar da sua saúde da melhor maneira possível.</p>
            </div>
            <div className={styles.benefitItem}>
              <img src="../icone3.svg" alt="Icon 3" className={styles.image3} />
              <h3>Restituição dos valores pagos indevidamente</h3>
              <p>Se você já pagou Imposto de Renda sobre seus rendimentos de aposentadoria ou pensão nos últimos 5 anos, você tem direito à restituição dos valores pagos indevidamente. Essa quantia pode ser um importante suporte financeiro para você e sua família nesse momento.</p>
            </div>
          </div>
        </section>

        <section className={styles.hero}>
          <h2>Perguntas Frequentes</h2>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Como posso saber se tenho direito à isenção?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Para determinar se você tem direito à isenção, é necessário
                  realizar uma análise detalhada do seu histórico médico e das
                  disposições legais atuais. Como a ajuda de um escritório de
                  advocacia especializado, podemos ajudá-lo a entender as nuances
                  da lei e a avaliar se sua condição se enquadra nas categorias de
                  doenças previstas para isenção.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  O processo de isenção é demorado?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  O tempo necessário para obter a isenção pode variar dependendo de vários fatores,
                  incluindo a complexidade do seu caso, agilidade dos órgãos governamentais, ou a
                  necessidade de pedido judicial. No entanto, com a orientação jurídica correta, podemos
                  trabalhar juntos para garantir que o processo seja o mais eficiente e rápido possível.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  E se minha doença não estiver na lista, tenho direito?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Salvo em um número muito limitado de situações, de doenças muito similares as da lista,
                  não, não há direito. A lista de doenças é considerada taxativa pela Receita Federal e em
                  grande parte dos tribunais, ou seja, somente o que está nela dá direito a isenção.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  A isenção se aplica ao imposto que pago sobre rendas como salários ou aluguéis?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Não, a isenção somente se aplica ao imposto de renda que seria pago pelo que foi ganho à
                  titulo de aposentadoria, reforma ou proventos. Outras fontes de renda como salário ou
                  aluguéis continuam podendo pagar imposto de renda.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Preciso de um advogado para solicitar a isenção?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Embora seja possível solicitar a isenção por conta própria, ter um advogado especializado
                  pode aumentar significativamente suas chances de sucesso. Além de fornecer a orientação
                  necessária, lidar com a burocracia e defender seus direitos de forma eficaz perante as
                  autoridades fiscais, lhe garante segurança caso haja problemas ou rejeição nos pedidos.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  A isenção é válida para os anos subsequentes?
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Sim, apesar de em alguns casos, a depender do órgão pagador da aposentadoria, possa ser
                  necessário renovar a isenção. Como regra geral, se entende que com a remissão da doença
                  o benefício é permanete, desde o momento em que se contraiu a doença.
                </div>
              </div>
            </div>
          </div>
        </section>

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


        <section className={styles.contactSection} id="contact">
          <h2>Entre em contato conosco!</h2>
          <div className={styles.contactContent}>
            <div className={styles.contactDetails}>
              <p><strong>E-mail:</strong> <a href="mailto:contato@blascoadvogados.com.br">contato@blascoadvogados.com.br</a></p>
              <p><strong>Site:</strong> <a href="http://www.blascoadvogados.com.br">www.blascoadvogados.com.br</a></p>
              <p><strong>Telefone:</strong> (53) 9999-7706</p>
              <p><strong>WhatsApp:</strong> (53) 9999-7706</p>
              <p><strong>Endereço:</strong> Rua Torres, 44, Steffen, Brusque/SC, CEP 88.355-170</p>
              <p>Nós atendemos de segunda a sexta-feira, das 9h às 18h, e aos sábados, das 9h às 12h. Nós respondemos a todas as mensagens em até 24 horas. Nós ficaremos felizes em ouvir você e te ajudar a resolver o seu problema.</p>
            </div>
            <div className={styles.contactMap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0586410506873!2d-49.00636292358583!3d-27.098280721011506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df2745c9874f5f%3A0x21b2f8e2a5e4b86e!2sR.%20Torres%2C%2044%20-%20Steffen%2C%20Brusque%20-%20SC%2C%2088355-170%2C%20Brazil!5e0!3m2!1sen!2sus!4v1675074295867!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                title="Location"
              ></iframe>
            </div>
          </div>
        </section>

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
      </main>
      <Footer/>
    </div>
  );
}
