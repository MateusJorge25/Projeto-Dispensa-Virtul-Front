import react from 'react'

//import Container from '../layout/Container'

import './Login.css'

// import img from'../../img/7';

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
    <div className='Container-Login'>
    <form onSubmit={handleSumit}>
        
    <div >
        <img src="../../img/7.jpg" alt='Imagem usuario'/>
    </div>

        <div className='top'>
            <input type='email' id='email' name='email' placeholder='Insira seu email' />
        </div>

        <div className='mid'>
            <input type='password' id='senha' name='senha' placeholder='Inserir sua senha' />
        </div>

        <div className='connected'>
            <label htmlFor='FiqueConectado'>
            <input type='checkbox' id='FiqueConectado' name='Fique Conectado' checked={FiqueConectado} onChange={(e) => setFiqueConectado(e.target.checked)} 
            /> 
            Fique Conectado
           </label>
        </div>

            <button className='click' type='submit'>Entrar</button>

        <div className='forgot'>
           <a href='/esqueceu-a-senha' target='_black'> Esqueceu a senha?</a>
        </div>


    </form>
    </div>
</div>
    );
}

export default Login
