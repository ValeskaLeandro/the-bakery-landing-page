/* eslint-disable react/jsx-no-target-blank */
import './App.css'

import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import MainBanner from './components/MainBanner/MainBanner'
import OurServices from './components/OurServices/Ourservices'
import Products from './components/Products/Produts'
import Team from './components/Team/Team'

import { FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa";
function App() {
  return (
    <>
    <Header />
    <MainBanner />    
    <OurServices/>
    <Products />
    <Team />
    <Contact />
    <footer>
      <span>Valeska Leandro &copy; Todos os direitos reservados</span>
      <div className='social'>
        <span><a href="https://www.linkedin.com/in/valeskaleandro/" target='_blank'><FaLinkedinIn color='#c6713a' size={20}/></a></span>
        <span><a href="https://github.com/ValeskaLeandro" target='_blank'><FaGithub color='#c6713a' size={20}/></a> </span>
        <span><a href="https://www.instagram.com/valeskaleandro/" target='_blank'><FaInstagram color='#c6713a' size={20}/></a> </span>
      </div> 
    </footer>
    </>
  )
}

export default App
