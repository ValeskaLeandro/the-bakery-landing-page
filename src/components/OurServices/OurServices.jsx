import CardService from "../CardService/CardService"
import styles from "./OurServices.module.css"

import { GiHandTruck, GiStairsCake, GiCupcake, GiSlicedBread } from "react-icons/gi";
import { BsCupStraw } from "react-icons/bs";
import { PiCakeLight } from "react-icons/pi";

export default function OurServices() {
  const iconProps = {
    color: "#624836",
    size: 35
  };

  return(
    <div className={styles.container} id="services">
        <h3>Nossos serviços</h3>
        <p>Pensando sempre no melhor para você!</p>
      <div className={styles.our_services}>
        <CardService icon={<GiSlicedBread {...iconProps}/>} title="Pães"
        description={"Nosso pão é cuidadosamente preparado com ingredientes da mais alta qualidade, resultando em produtos de sabor excepcional. Desde pães tradicionais, como baguetes crocantes e pães de forma macios."}/>
        <CardService icon={<PiCakeLight {...iconProps}/>} title="Bolos"
        description={"Aqui você encontrará uma ampla variedade de bolos que vão encantar os seus sentidos. Desde clássicos como o bolo de chocolate com cobertura cremosa até criações mais elaboradas."}/>
        <CardService icon={<BsCupStraw {...iconProps}/>} title="Sucos frescos"
        description={"Acreditamos no poder dos ingredientes naturais para nutrir o corpo e refrescar a mente. Preparamos sucos feitos na hora, com frutas frescas e selecionadas."}/>
        <CardService icon={<GiCupcake {...iconProps}/>} title="Refeições"
        description={"Refeições deliciosas para saciar sua fome. Combinamos ingredientes frescos e criatividade culinária para proporcionar uma experiência gastronômica completa."}/>
        <CardService icon={<GiStairsCake {...iconProps}/>} title="Casamentos"
        description={"Entendemos a importância de cada detalhe em seu grande dia e nos dedicamos a criar doces e bolos personalizados que são verdadeiras obras de arte comestíveis."}/>
        <CardService icon={<GiHandTruck {...iconProps}/>} title="Delivery"
        description={"Delivery rápido e conveniente. Agora, você pode desfrutar dos nossos pães frescos e deliciosos no conforto da sua casa ou escritório, com apenas alguns cliques."}/>
      </div>
    </div>
  )
}