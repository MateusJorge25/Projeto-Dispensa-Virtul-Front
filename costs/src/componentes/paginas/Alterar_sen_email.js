import React from "react"

import './Alterar_sen_email.css'







function Alterar_sen() {

    const handleSumit = (event) => {
        event.preventDefault();
    }


    return (
<div className="Conteiner">
    <form onSubmit={handleSumit}>

    <div className="conteinerImg">
         {/*imagem do cadeado*/}
    </div>

    <div className="conteinerTitle">
        <h1>Problemas para entrar?</h1>
    </div>

    <div className="conteinerP">
        <p>Insira seu email e enviaremos um link para redefinir sua senha.</p>
    </div>

    <div className="conteinerBox">
        <input type='email' id='email' name='email' placeholder="Insira seu email"/>
    </div>

    <div className="conteinerBtn">
        <button className='click' type='submit'>Entrar</button>  
    </div>

    <div className="conteinerLink">
        <a className='link' href='/Cadastramento.js' target='_black'>Criar nova conta</a>
    </div>










    </form>
</div>

    );
}

export default Alterar_sen

