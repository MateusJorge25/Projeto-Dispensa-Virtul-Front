import React from "react";
import imgCadeado from "../../../img/Imagem de cadeado.png"
import './RedefSenha.css';
import Container from "../../layout/Container";
import { useParams } from "react-router-dom";
import { useState } from "react";


function RedefSenha() {
    
    const { tokenparam } = useParams();

    const [Iptsenha, setIptSenha] = useState("");

    const handlenewPassword = (e)=>{
        setIptSenha(e.target.value);
    }


    const sendApi = async(data, tokenparam) =>{

        const api = await fetch(`http://localhost:3000/alterar-senha/${tokenparam}`,{
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

    const verificar = async(data, tokenparam) =>{
        const resApi = await sendApi(data,tokenparam);
        if(resApi.message == "Senha Alterada!"){
            window.location.href = `http://localhost:3001/`;
        }
    }

    

    const handleSubmit = (event) => {
        event.preventDefault();

        let formData =  new FormData(event.target);
        let data = {};

        for(let pair of formData.entries()){
            data[pair[0]] = pair[1];
        }

        verificar(data,tokenparam);
    }
    
    

    return (
        <Container containerMod="TelaLoginRegister">
        <div className="Conteiner">
        <form className="FormRedfSenha" onSubmit={handleSubmit}>

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
            <input type='text' className='inptPassword' name='novaSenha' placeholder='Insira uma nova senha' value={Iptsenha} required onChange={(e)=>{handlenewPassword(e)}}/>
            {/* <input type='text' className='inptPassword' name= 'password' placeholder='Confirme a nova senha' />  */}
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