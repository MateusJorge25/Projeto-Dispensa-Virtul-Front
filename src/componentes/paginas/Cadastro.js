import './Cadastro.css';
import img from '../../img/7-removebg-preview.png';
const cadastro = () =>{

return (
    <div className='Container'>
        <form> 
        <div className='imgContainer'>
            <img src={img} width={100}/>
        </div>

        <div className='Seletores'>
            <a className= "entrar" href='/'>Entrar</a>
            <a className= "cadastrar" href='/cadastro'>Cadastro</a>
        </div>

        <div className='ContainerImpFirst'>
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
        <div className='ContainerImp'>
            <input className="Ipt" type='string' name='telefone' required placeholder='Insira seu telefone'></input>
        </div>        
        <div className='ContainerBtn'>
            <button className="btn" type='submit'>Cadastrar</button>
        </div>
        </form>
    </div>
)
}

export default cadastro