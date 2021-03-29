import styles from '../styles/components/ThankYou.module.scss'

const ThankYou = () => {
  return (
    <div className={styles.thanks}>
      <h2 className={styles.title}>Obrigada!</h2>
      <p className={styles.text}>Seu e-book - <strong>Guia Simplificado do Marketing Digital</strong> será enviado para o seu e-mail, verifique todas as suas caixas, inclusive seu SPAM!</p>
      <p className={styles.text}>Aproveite para conhecer a minha <strong>Consultoria Personalizada para Empreendedoras!</strong></p>
      <p className={styles.text}>Um serviço exclusivo para você que deseja conhecer as estratégias do Marketing Digital, e aplicá-las no seu Instagram para melhorar seus resultados!</p>
      <a className={styles.link} href="https://dayanesilva.com.br/consultoria-de-marketing-para-empreendedoras/" title="Consultoria Personalizada">Consultoria Personalizada</a>
    </div>
  )
}

export default ThankYou