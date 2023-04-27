import React from "react";
import imgCadeado from "../../img/Imagem de cadeado.png"
import './Alterar_sen_email.css';
import imgSeparacao from "../../img/Separação.png"
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import Container from "../layout/Container";
>>>>>>> 5ded814b56e55bf7a2afa57d00c7426a2218f6a4

function Alterar_sen() {
    
    const handleSumit = (event) => {
        event.preventDefault();
    }
    
    return (
        
        <Container>
        <div className="Conteiner">
        <form  className="FormEsqueceuSenha" onSubmit={handleSumit}>

        <div className='conteinerImg'>
            <img src={imgCadeado} width={100}></img>
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
            <input type='email' className='inptEmailPassword' name='email' placeholder='Insira seu email' />
        </div>

        <div className="conteinerBTN">
            <button className='button' type='submit'>Enviar</button>
        </div>

        <div className="conteinerDivisoria">
            <img className="linhas" src={imgSeparacao} width={75} height={2} ></img>
            <p>Ou</p>
            <img className="linhas" src={imgSeparacao} width={75} height={2}></img>
        </div>

        <div className="conteinerLink">
<<<<<<< HEAD
            <Link className='conteinerLink' to='Cadastro.js' target='_black'> Criar nova conta</Link>
=======
            <a className='conteinerLink' href='/cadastro' target='_black'> Criar nova conta</a>
>>>>>>> 5ded814b56e55bf7a2afa57d00c7426a2218f6a4
        </div>

        </form>
        </div>
        </Container>
       
    );
}

export default Alterar_sen

