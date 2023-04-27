import '../paginas/Cadastro.css';
import img from '../../img/7-removebg-preview.png';
import Container from '../layout/Container';
import { Link } from 'react-router-dom';
function cadastro (){

return (
    <Container>
    <div className='Container'>
        <form> 
        <div className='imgContainer'>
            <img src={img} width={100}/>
        </div>

        <div className='Seletores'>
            <Link className= "entrar" to='/'>Entrar</Link>
            <Link className= "cadastrar  select" to='/cadastro'>Cadastro</Link>
        </div>

        <div className='ContainerImp'>
            <input className="Ipt"type='email' name='email' required placeholder='Insira seu email'></input>
        </div>
        <div className='ContainerImp'>
            <input className="Ipt"type='email' name='emailConfirm' required placeholder='Confirme seu email'></input>
        </div>
        <div className='ContainerImp'>
            <input className="Ipt" type='password' name='senha' required placeholder='Insira sua senha'></input>
        </div>
        <div className='ContainerImp'>
            <input className="Ipt" type='password' name='senhaConfirm' required placeholder='Confirme sua senha'></input>
        </div>        
        <div className='ContainerBtn'>
            <button className="btn" type='submit'>Cadastrar</button>
        </div>
        </form>
    </div>
    </Container>
)
}

export default cadastro