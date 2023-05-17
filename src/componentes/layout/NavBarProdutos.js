import '../layout/NavBarProdutos.css';
import icon from '../../img/Logo.png';
import hamburguer from "../../img/Hamburger_icon 2.png"


const NavBarProdutos = ({}) => {

    return(
        <div className='container-navbar'>
            <nav className="navbar">
                <div className='container-icon'>
                    <a className='tagAForicon' href='/home'><img src= {icon} width={60}></img></a>                    
                    <h1>Despensa</h1>
                        <div className="hamburguer">
                            <a className='ContainerHamburguer' onClick={'clickMenu()'}><img src={hamburguer} width={30}/></a>
                        </div>         
                </div>     
            </nav>
        </div>
    ) 
}

export default NavBarProdutos;