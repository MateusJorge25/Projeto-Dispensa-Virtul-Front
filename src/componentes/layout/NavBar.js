import '../layout/NavBar.css';
import icon from '../../img/Logo.png';
import hamburguer from "../../img/Hamburger_icon 2.png"
import Lupa from '../../img/Imagem Lupa.png';
import { Link } from 'react-router-dom';



const navbar = () => {

    return(
        <div className='container-navbar'>
            <nav className="navbar">
                <div className='container-icon'>
                    <Link className='tagAForicon' to='/home'><img src={icon} alt='IconApp' width={60}></img></Link>                    
                    <h1>Despensa</h1>
                    <div className='containerInputBarraDePesquisa'>
                        <input type="text" name='barraDePesquisa' className="barraDePesquisa" placeholder='Buscar Item'/> 
                        <span className='ContainerIconLupa'><img src={Lupa} alt='IconLupa'width={30}/></span>    
                    </div>   
                    <div className="Chamburguer">
                            <span className='iconHamburguer'><img src={hamburguer} width={30}/></span>
                    </div>      
                </div>     
            </nav>
        </div>
    )
}

export default navbar;