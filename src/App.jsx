import './App.css'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import MainBanner from './components/MainBanner/MainBanner'
import OurServices from './components/OurServices/Ourservices'
import Products from './components/Products/Produts'
import Team from './components/Team/Team'

function App() {
  return (
    <>
    <Header />
    <MainBanner />    
    <OurServices/>
    <Products />
    <Team />
    <Contact />
    </>
  )
}

export default App
