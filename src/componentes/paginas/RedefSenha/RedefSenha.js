import React from "react";
import imgCadeado from "../../../img/Imagem de cadeado.png"
import './RedefSenha.css';
import Container from "../../layout/Container";


function RedefSenha() {
    
    const handleSumit = (event) => {
        event.preventDefault();
    }
    
    return (
        <Container>
        <div className="Conteiner">
        <form  className="FormRedfSenha" onSubmit={handleSumit}>

        <div className='conteinerImg'>
            <img src={imgCadeado} alt="Imagem Cadeado" width={100}></img>
        </div>

        <div className="conteinerTitle">
            <h1>Redefinir Senha</h1>
        </div>

        <div className="conteinerP">
            <h5>Insira uma nova senha para a sua </h5>
        </div>

        <div className="conteinerP1">
            <h5>conta.</h5>
        </div>

        <div className="conteinerBox">
            <input type='text' className='inptPassword' name='password' placeholder='Insira uma nova senha' />
            <input type='text' className='inptPassword' name= 'password' placeholder='Confirme a nova senha' /> 
        </div>

        <div className="conteinerBTN">
            <button className='button' type='submit'>Salvar</button>
        </div>

        </form>
        </div>
        </Container>
 );
}

export default RedefSenha;