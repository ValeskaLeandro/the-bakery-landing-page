/* eslint-disable react/prop-types */
import styles from "./CardProduct.module.css"

export default function CardProduct({img, name, price}) {
  return(
    <div className={styles.card_product}>
      <img src={img} alt={name} />
      <div className={styles.info_product}>
        <h3>{name}</h3>
        <span>{price}</span>
      </div>
    </div>
  )
}