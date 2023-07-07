/* eslint-disable react/prop-types */
import styles from "./CardTeam.module.css"

export default function CardTeam({img, role, names}) {
  return(
    <div className={styles.card_team}>
      <img src={img} alt={`${role}: ${names}`} />
      <div className={styles.info}>
        <h3>{role}</h3>
        <p>{names}</p>
      </div>
    </div>
  )
}