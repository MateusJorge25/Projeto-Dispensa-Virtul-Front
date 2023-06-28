import React from "react";
import imgCadeado from "../../../img/Imagem de cadeado.png"
import './Alterar_sen_email.css';
import imgSeparacao from "../../../img/Separação.png"
import { Link } from "react-router-dom";
import Container from "../../layout/Container";


function Alterar_sen() {
    
    const handleSumit = (event) => {
        event.preventDefault();
    }
    const sendApi = async(data) =>{

        const api = await fetch(`http://localhost:3000/esqueci-senha`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })

        const apijson = await api.json();
        console.log(apijson);
        return apijson;
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
        <Container containerMod="TelaLoginRegister">
        <div className="Conteiner">
        <form  className="FormEsqueceuSenha" onSubmit={handleSubmit}>

        <div className='conteinerImg'>
            <img src={imgCadeado} alt="Imagem Cadeado" width={100}></img>
        </div>

        <div className="conteinerTitle">
            <h1>Problemas para entrar?</h1>
        </div>

        <div className="conteinerP">
            <h5>Insira seu email e enviaremos um </h5>
        </div>

        <div className="conteinerP1">
            <h5>link para redefinir sua senha.</h5>
        </div>

        <div className="conteinerBox">
            <input type='email' className='inptEmailEsqueciSenha' name='email' placeholder='Insira seu email' />
        </div>

        <div className="conteinerBTN">
            <button className='button' type='submit'>Enviar</button>
        </div>

        <div className="conteinerDivisoria">
            <img className="linhas" src={imgSeparacao} alt="Separação" width={75} height={2} ></img>
            <p>Ou</p>
            <img className="linhas" src={imgSeparacao} alt="Separação" width={75} height={2}></img>
        </div>

        <div className="forgot">
            <Link className='forgotlink' to='/cadastro' target='_black'> Criar nova conta</Link>
        </div>

        </form>
        </div>
        </Container>
    );
}

export default Alterar_sen

