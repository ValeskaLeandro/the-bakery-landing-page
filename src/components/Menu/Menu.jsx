// eslint-disable-next-line react/prop-types
export default function Menu({className, openMenu}){
  return (<nav className={className}>
    <ul onClick={openMenu}>
      <li><a href="#home" >Home</a></li>
      <li><a href="#products" >Produtos</a></li>
      <li><a href="#about" >Sobre nós</a></li>
      <li><a href="#clients" >Clientes</a></li>
      <li><a href="#contact" >Contato</a></li>
    </ul>
  </nav>)
}