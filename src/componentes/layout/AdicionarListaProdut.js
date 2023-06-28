import { Link, useParams } from "react-router-dom";
import Container from "./Container";
import './AdicionarProdutos.css';
import btnVoltar from "../../img/Botão de voltar.png";
import { useState } from 'react'



const AdicionarProdutos = ({tela, textButton}) =>{


    const { id } = useParams();
    const [Contador, setContador] = useState(null);

    const sendApi = async(data, id) =>{

        const api = await fetch(`http://localhost:3000/listaCompras/create/${id}`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization":sessionStorage.getItem("token"),
            },
            body: JSON.stringify(data),
        })

        const apijson = await api.json();
        // console.log(apijson);
        window.location.href = `/listadecompras/${id}`;
        return apijson;
    }



    const handleForm = (event) =>{
        event.preventDefault();

        let formData =  new FormData(event.target);
        let data = {};

        for(let pair of formData.entries()){
            data[pair[0]] = pair[1];
        }

        sendApi(data, id);
    }

    const handleContador = (event) => {
        if(event.target.value >= 100){
            setContador(100);
        }else if(event.target.value < 0){
            setContador(0);
        }else{
            setContador(event.target.value);
        }
    };

    const AdicionarContador = ()=>{
        if(Contador >= 100)
            setContador(100)
        else
            setContador(Contador+1);
    }

    const RemoverContador = ()=>{
        if(Contador>0)
            setContador(Contador-1);
        else
            setContador(Contador);
    }
    
    return(

        <div className="adicionar" >
            <Container containerMod="telaAdicionar">
                <div className="Barravoltar">
                    <Link to={`/listadecompras/${id}`}><img src={btnVoltar} width={45} alt="BotãoVoltar"/></Link>    
                    <h1>{tela}</h1>
                </div>
                <form onSubmit={handleForm}>
                <div className="ContainerInputAdicionar">
                    <input type="text" name="nome" className="InputAdicionarProdutos" required placeholder="Nome"/>
                </div>
                
                <div className="ContainerInputAdicionar">
                    <input type="text" className="InputAdicionarProdutos" placeholder="Quantidade" disabled />
                    <div className="containerButtonsContadores">
                        <button className="menos" onClick={RemoverContador}>-</button>
                        <input type="number" className="contador" name="quantidade" required value={Contador} onChange={(e)=> {handleContador(e)}} placeholder="0"/> 
                        <button className="mais" onClick={AdicionarContador}>+</button> 
                    </div>
                </div>

                <div className="ContainerInputAdicionar">
                    <input type="text" name="marca" className="InputAdicionarProdutos" placeholder="Marca"/>
                </div>


                <div className="ContainerInputAdicionar">
                <select name="img" className="InputAdicionarProdutos" required>
                        <option value="" disabled selected>Selecione uma Imagem</option> 
                        <option value="Yogurt">Yogurt</option> 
                        <option value="Leite">Leite</option> 
                        <option value="SucoDeLaranja">Suco De Laranja</option> 
                    </select>
                </div> 

                
                <div className="BtnsAdicionar">
                    <Link to={`/produtos/${id}`} className="BtnCancelar">Cancelar</Link>
                    <button type='submit' className="BtnAdicionar">{textButton}</button>
                </div>
                </form>
            </Container>
        </div>
    )   
}

export default AdicionarProdutos;