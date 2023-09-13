import CardProduct from "../CardProduct/CardProduct"
import styles from "./Products.module.css"

export default function Products(){
  return(
    <div className={styles.container} id="products">
    <h2>Produtos populares</h2>
    <p>Os queridinhos dos clientes!</p>
    <div className={styles.products}>
      <CardProduct img="./products/product1.jpg" name="Bolo de limão" price="R$ 59.90" />
      <CardProduct img="./products/product2.jpg" name="Donut simples" price="R$ 6.90" />
      <CardProduct img="./products/product3.jpg" name="Bolo de cenoura" price="R$ 9.90" />
      <CardProduct img="./products/product4.jpg" name="Donut confeitado" price="R$ 8.90" />
      <CardProduct img="./products/product5.jpg" name="Bolo de chocolate" price="R$ 11.90" />
      <CardProduct img="./products/product6.jpg" name="Mousse de chocolate" price="R$ 8.90" />
      <CardProduct img="./products/product7.jpg" name="Croissant" price="R$ 7.90" />
      <CardProduct img="./products/product8.jpg" name="Macarrons" price="R$ 5.90" />
    </div>
    </div>
  )
}