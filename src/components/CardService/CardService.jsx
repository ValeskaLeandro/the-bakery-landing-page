/* eslint-disable react/prop-types */
import styles from "./CardService.module.css"

export default function CardService({icon, title, description}) {
  return(
    <div className={styles.card_service}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content_card}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
        <a href="#">Ler mais</a>
      </div>

    </div>
  )
}