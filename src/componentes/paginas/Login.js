import './Login.css';
import img from '../../img/7-removebg-preview.png';
import Container from "../../componentes/layout/Container"
import { useState } from 'react'
import { Link } from 'react-router-dom';

function Login () {
    const [formData, setFormData] = useState ({
        email:'',
        senha:'',
    });
    const [FiqueConectado, setFiqueConectado] = useState("");

    const handleSumit = (event) => {
        event.preventDefault();
    }


    return (
    <Container customClass='.min-height'>
        <div className='Container'>
            <form onSubmit={handleSumit}>  
            <div className='containerImg'>
                <img src={img} width={100}/>
            </div>  

            <div className='Seletores'>
                <Link className= "entrar select" to='/'>Entrar</Link>
                <Link className= "cadastrar" to='/cadastro'>Cadastro</Link>
            </div>

                <div className='top'>
                    <input type='email' className='inptEmailPassword' name='email' placeholder='Insira seu email' required />
                </div>

                <div className='mid'>
                    <input type='password' className='inptEmailPassword' name='senha' placeholder='Inserir sua senha' required />
                </div>

                <div className='connected'>
                    <input type='checkbox' id='FiqueConectado' name='Fique Conectado' checked={FiqueConectado} onChange={(e) => setFiqueConectado(e.target.checked)} /> 
                    <label htmlFor='FiqueConectado' className='labelFiqueConectado'>Fique Conectado</label>   
                </div>
                <div className='campBtn'>
                    <button className='button' type='submit'>Entrar</button>  
                </div>
                <div className='forgot'>
                <Link className='forgotlink' to='/alterarSenha' target='_black'> Esqueceu a senha?</Link>
                </div>
            </form>
        </div>
    </Container>
    );
}

export default Login
