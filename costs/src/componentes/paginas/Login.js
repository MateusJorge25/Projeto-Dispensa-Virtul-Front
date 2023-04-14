import react from 'react'

import Container from '../layout/Container';

import './Login.css'

import img from'../../img/7.jpg';

import { useState } from 'react'




function Login() {
    const [email, setemail] = useState('');
    const [senha, setsenha] = useState('');
    const [FiqueConectado, setFiqueConectado] = useState('');

    const handleSumit = (event) => {
        event.preventDefault();
    }

    return (
<div className='Container'>
    <form onSubmit={handleSumit}>
        
    <div className='containerImg'>
        <img className='img' src= {img} alt='Imagem usuario' width={100}/>
    </div>

        <div className='top'>
            <input type='email' id='email' name='email' placeholder='Insira seu email' />
        </div>

        <div className='mid'>
            <input type='password' id='senha' name='senha' placeholder='Inserir sua senha' />
        </div>

        <div className='connected'>
            <label classeName="labelFiqueConectad" htmlFor='FiqueConectado'>
            <input type='checkbox' id='FiqueConectado' name='Fique Conectado' checked={FiqueConectado} onChange={(e) => setFiqueConectado(e.target.checked)} 
            /> 
            Fique Conectado
           </label>
        </div>

        <div className='conteinerBtn'>
            <button className='click' type='submit'>Entrar</button>  
        </div>

        <div className='forgot'>
           <a className='linkForgot' href='/esqueceu-a-senha' target='_black'> Esqueceu a senha?</a>
        </div>


    </form>
</div>
    );
}

export default Login
