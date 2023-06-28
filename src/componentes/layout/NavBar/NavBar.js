import "./NavBar.css";
import icon from '../../../img/Logo.png';
import hamburguer from "../../../img/Hamburger_icon 2.png"
import Lupa from '../../../img/Imagem Lupa.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import IconPerfil from "../../../img/7-removebg-preview.png";
import iconSaida from "../../../img/IconSair.png"


const Navbar = () => {

    const [isMenuVisible, setIsMenuVisible] = useState(false);
        

    const handleSair = () => {
        sessionStorage.clear();
        window.location.href = "/"
    }

    const handleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    return(
        <div className='container-navbar'>
            <nav className="navbar">
                <div className='container-icon'>
                    <Link className='tagAForicon' to='/home'><img src={icon} alt='IconApp' width={60}></img></Link>                    
                    <h1>Despensa Virtual</h1>
                    <div className='containerInputBarraDePesquisa'>
                        <input type="text" name='barraDePesquisa' className="barraDePesquisa" placeholder='Buscar Item'/> 
                        <span className='ContainerIconLupa'><img src={Lupa} alt='IconLupa'width={30}/></span>    
                    </div>   
                    <div className="Chamburguer">
                            <button onClick={(e)=>{handleMenu(e)}} className='iconHamburguer'><img src={hamburguer} width={30} alt="OpçõesUser"/></button>
                    </div>
                            <div className="containerOpcoesUser">
                                {
                                    isMenuVisible &&(
                                        <ul className="ulNav">
                                            <li className="itemsMenu"><Link to={``} className="optsUser"><img src={IconPerfil} alt="Minha conta" width={20}/>Minha Conta</Link></li>
                                            <li className="itemsMenu"><button className="optsUser" onClick={handleSair}><img src={iconSaida} alt="Sair" width={20}/>Sair</button></li>
                                        </ul>
                                    )
                                }
                            </div>    
                </div>     
            </nav>
        </div>
    )
}

export default Navbar;