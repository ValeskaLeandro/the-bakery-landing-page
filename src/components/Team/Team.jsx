import styles from "./Team.module.css"
import CardTeam from "../CardTeam/CardTeam"

export default function Team() {
  return(
    <div className={styles.container} id="team">
      <h3>Nosso time</h3>
      <p>Profissionais qualificados e de excelência! </p>
      <div className={styles.team} >
        <CardTeam img="/chefs/chef1.jpg" role="Padeiro Chef" names="Rafael Oliveira"/>
        <CardTeam img="/chefs/chef2.jpg" role="Chef e Auxiliar de Confeitaria" names="Lucas Mendes & Gabriel Silva"/>
        <CardTeam img="/chefs/chef3.jpg" role="Chocolatier" names="Felipe Rodrigues"/>
      </div>
    </div>
  )
}