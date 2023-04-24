import React from "react";
import imgCadeado from "../../img/Imagem de cadeado.png"
import './Alterar_sen_email.css';
import imgSeparacao from "../../img/Separação.png"
import Container from "../layout/Container";

function Alterar_sen() {
    
    const handleSumit = (event) => {
        event.preventDefault();
    }
    
    return (
        <div className="Conteiner">
        <Container>
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
            <button className='button' type='submit'>Entrar</button>
        </div>

        <div className="conteinerDivisoria">
            <img src={imgSeparacao} width={100} ></img>
            <p>Ou</p>
            <img src={imgSeparacao} width={100} ></img>
        </div>

        <div className="conteinerLink">
            <a className='conteinerLink' href='Cadastro.js' target='_black'> Criar nova conta</a>
        </div>

        </form>
        </Container>
        </div>
    );
}

export default Alterar_sen

