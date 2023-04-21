import './Login.css';
import img from '../../img/7-removebg-preview.png';
import Container from "../../componentes/layout/Container"
import { useState } from 'react'

function Login () {
    const [email, setemail] = useState('');
    const [senha, setsenha] = useState('');
    const [FiqueConectado, setFiqueConectado] = useState('');

    const handleSumit = (event) => {
        event.preventDefault();
    }

    return (
    <Container customClass='.min-height'>
        <div className='Container'>
            <form onSubmit={handleSumit}>  
            <div className='containerImg'>
                <img  src={img} width={100}/>
            </div>  

            <div className='Seletores'>
                <a className= "entrar select" href='/'>Entrar</a>
                <a className= "cadastrar" href='/cadastro'>Cadastro</a>
            </div>

                <div className='top'>
                    <input type='email' className='inptEmailPassword' name='email' placeholder='Insira seu email' />
                </div>

                <div className='mid'>
                    <input type='password' className='inptEmailPassword' name='senha' placeholder='Inserir sua senha' />
                </div>

                <div className='connected'>
                    <input type='checkbox' id='FiqueConectado' name='Fique Conectado' checked={FiqueConectado} onChange={(e) => setFiqueConectado(e.target.checked)} /> 
                    <label htmlFor='FiqueConectado' className='labelFiqueConectado'>Fique Conectado</label>   
                </div>
                <div className='campBtn'>
                    <button className='button' type='submit'>Entrar</button>  
                </div>
                <div className='forgot'>
                <a className='forgotlink' href='/esqueceu-a-senha' target='_black'> Esqueceu a senha?</a>
                </div>
            </form>
        </div>
    </Container>
    );
}

export default Login
