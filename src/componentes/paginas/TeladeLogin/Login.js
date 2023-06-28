import './Login.css';
import img from '../../../img/7-removebg-preview.png';
import Container from "../../layout/Container"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [FiqueConectado, setFiqueConectado] = useState("");
    const [Data, setData] = useState([]);

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const sendApi = async(data) =>{
        const api = await fetch("http://localhost:3000/login",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const apijson = await api.json();
        setData(apijson);

        sessionStorage.setItem("token",`${apijson.token}`);

        if(sessionStorage.getItem("token") === apijson.token){
            window.location.href = `http://localhost:3001/home/${apijson.query[0].id}`;
        }else{
            console.log(apijson.message);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let formData =  new FormData(event.target);
        let data = {};

        for(let pair of formData.entries()){
            data[pair[0]] = pair[1];
        }

        sendApi(data);
    }


    return (
        <Container customClass='min-height' containerMod="TelaLoginRegister">
            <div className='Container'>
                <form className='formTelaLogin' onSubmit={handleSubmit}>  
                <div className='containerImg'>
                    <img src={img} width={100}/>
                </div>  

                <div className='Seletores'>
                    <Link className= "entrar select" to='/'>Entrar</Link>
                    <Link className= "cadastrar" to='/cadastro'>Cadastro</Link>
                </div>

                    <div className='top'>
                        <input type='email' className='inptEmailPassword' name='email' placeholder='Insira seu email' required value={email} onChange={(e) => {handleEmail(e)}}/>

                    </div>

                    <div className='mid'>
                        <input type='password' className='inptEmailPassword' name='senha' placeholder='Insira sua senha' required value={password} onChange={(e) => {handlePassword(e)}}/>
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
