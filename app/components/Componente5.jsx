import styles from '../styles/Componente5.module.css';

const Componente5 = () => {
  return (
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
              disposições legais atuais. Com a ajuda de um escritório de
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
              O tempo necessário para obter a isenção pode variar dependendo de
              vários fatores, incluindo a complexidade do seu caso, agilidade
              dos órgãos governamentais, ou a necessidade de pedido judicial.
              No entanto, com a orientação jurídica correta, podemos trabalhar
              juntos para garantir que o processo seja o mais eficiente e rápido
              possível.
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
              Salvo em um número muito limitado de situações, de doenças muito
              similares às da lista, não, não há direito. A lista de doenças é
              considerada taxativa pela Receita Federal e em grande parte dos
              tribunais, ou seja, somente o que está nela dá direito à isenção.
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
              A isenção se aplica ao imposto que pago sobre rendas como salários
              ou aluguéis?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Não, a isenção somente se aplica ao imposto de renda que seria
              pago pelo que foi ganho a título de aposentadoria, reforma ou
              proventos. Outras fontes de renda como salário ou aluguéis
              continuam podendo pagar imposto de renda.
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
              Embora seja possível solicitar a isenção por conta própria, ter um
              advogado especializado pode aumentar significativamente suas
              chances de sucesso. Além de fornecer a orientação necessária,
              lidar com a burocracia e defender seus direitos de forma eficaz
              perante as autoridades fiscais, lhe garante segurança caso haja
              problemas ou rejeição nos pedidos.
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
              Sim, apesar de em alguns casos, a depender do órgão pagador da
              aposentadoria, possa ser necessário renovar a isenção. Como regra
              geral, se entende que com a remissão da doença o benefício é
              permanente, desde o momento em que se contraiu a doença.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Componente5;
