import styles from "./Header.module.css"
import image_logo from "../../assets/logo-image.png"
import { FiMenu, FiX } from "react-icons/fi";
import Menu from "../Menu/Menu";
import { useState } from "react";

export default function Header() {
  const [menuOn, setMenuOn] = useState(false)
  const openMenu = () => {
    setMenuOn(!menuOn)
  }

  return(
    <>
      <header className={styles.header}>
      <div className={styles.logo}>
        <img src={image_logo} alt="The Bakery" /> 
        <span>The Bakery</span>
      </div>
      
      <div className={styles.menu_toggle} onClick={openMenu}>
        {menuOn ? <FiX size={40}/> : <FiMenu size={40}/>}
      </div>
        <Menu className={`${styles.menu} ${styles.full_menu}`}/>
    </header>
      <div>
        <Menu className={`${styles.menu} ${menuOn ? styles.menuOpen : styles.menuClose}`} 
        openMenu={openMenu}/>
      </div>
    </>        
  )
}