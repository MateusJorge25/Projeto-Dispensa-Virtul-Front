import React from "react";
import imgCadeado from "../../img/Imagem de cadeado.png"
import './Alterar_sen_email.css';
import imgSeparacao from "../../img/Separação.png"
import { Link } from "react-router-dom";
import Container from "../layout/Container";


function Alterar_sen() {
    
    const handleSumit = (event) => {
        event.preventDefault();
    }
    
    return (
<<<<<<< HEAD
=======


>>>>>>> f56dd81b663274154f7dd2e473768d0c811e8663
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
            <Link className='conteinerLink' to='/cadastro' target='_black'> Criar nova conta</Link>
=======


            <Link className='conteinerLink' to='/cadastro' target='_black'> Criar nova conta</Link>

            <Link className='conteinerLink' to='Cadastro.js' target='_black'> Criar nova conta</Link>
          



        <Link className='conteinerLink' to='/cadastro' target='_black'> Criar nova conta</Link>

            <Link className='conteinerLink' to='Cadastro.js' target='_black'> Criar nova conta</Link>



>>>>>>> f56dd81b663274154f7dd2e473768d0c811e8663
        </div>

        </form>
        </div>
        </Container>
<<<<<<< HEAD
=======


>>>>>>> f56dd81b663274154f7dd2e473768d0c811e8663
    );
}

export default Alterar_sen

