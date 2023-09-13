import styles from "./Contact.module.css"

export default function Contact() {
  return(
    <div className={styles.container} id="contact">
      <div className={styles.contact}>
        <div className={styles.left_contact}>
          <h3>Entre em contato</h3>
          <p>Entre em contato para fazer seu orçamento ou pedido.</p>
          <form className={styles.form}>
            <input type="text" placeholder="Digite seu nome..." />
            <input type="text" placeholder="Digite seu e-mail..." />
            <textarea name="" id="" cols="30" rows="5" placeholder="Digite sua mensagem..."></textarea>
            <button>Enviar</button>
          </form>
        </div>      
        <img src="./production.jpg" alt="The Bakery" />        
      </div>
    </div>
  )
}