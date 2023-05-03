import '../layout/NavBar.css';
import icon from '../../img/Logo.png';
import Lupa from '../../img/Imagem Lupa.png';
import hamburguer from "../../img/Hamburger_icon 2.png"


const navbar = () => {

    return(
        <div className='container-navbar'>
            <nav className="navbar">
                <div className='container-icon'>
                    <a className='tagAForicon' href='/home'><img src= {icon} width={60}></img></a>                    
                    <h1>Despensa</h1>
                    <div className='containerInputBarraDePesquisa'>
                        <input type="text" name='barraDePesquisa' className="barraDePesquisa" placeholder='Buscar Item'/> 
                        <span className='ContainerIconLupa'><img src={Lupa} width={30}/></span>    
                        <div className="hamburguer">
                            <span className='ContainerHamburguer'><img src={hamburguer} width={30}/></span>
                        </div> 
                    </div>   
                </div>
               
            </nav>
        </div>
    )
}

export default navbar;