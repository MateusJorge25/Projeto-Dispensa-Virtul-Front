import { Link, useParams } from "react-router-dom";
import Container from "./Container";
import './AdicionarProdutos.css';
import btnVoltar from "../../img/Botão de voltar.png";
import caixa from "../../img/caixa.png";
import setaCima from "../../img/iconQuantidade.png";
import armario from "../../img/Prateleira.png";
import balança from "../../img/balança.png";
import calendario from "../../img/calendario.png";
import despesas from "../../img/despesas.png";
import bebidas from "../../img/Bebidas.png";
import { useState } from 'react'



const AdicionarProdutos = ({tela, textButton}) =>{


    const { id } = useParams();
    const [Contador, setContador] = useState("0");


    const handleContador = (event) => {
        setContador(event.target.value);
    };

    const sendApi = async(data, id) =>{

        const api = await fetch(`http://localhost:3000/produtos/create/${id}`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization":sessionStorage.getItem("token"),
            },
            body: JSON.stringify(data),
        })

        const apijson = await api.json();
        // console.log(apijson);
        window.location.href = `/produtos/${id}`;
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
    
    return(

        <div className="adicionar" >
        
            

            <Container containerMod="telaAdicionar">
                <div className="Barravoltar">
                    <Link to={`/produtos/${id}`}><img src={btnVoltar} width={45} alt="BotãoVoltar"/></Link>    
                    <h1>{tela}</h1>
                </div>
                <form onSubmit={handleForm}>
                <div className="ContainerInputAdicionar">
                    <input type="text" name="nome" className="InputAdicionarProdutos" required placeholder="Nome"/>
                </div>

                <div className="ContainerInputAdicionar">
                    <input type="text" name="lote" className="InputAdicionarProdutos" required placeholder="Lote"/>
                    {/* <span className="imgCampos"><img src={caixa} width={45} alt="caixa"></img></span>    */}
                </div>
                
                <div className="ContainerInputAdicionar">
                    <input type="text" className="InputAdicionarProdutos" placeholder="Quantidade" disabled />
                    {/* <span className="imgCampos"><img src={setaCima} width={45} alt="SetaCima"></img></span> */}
                    <div className="containerButtonsContadores">
                        <button className="menos">-</button>
                        <input type="text" className="contador" name="quantidade"required value={Contador} onChange={(e)=> {handleContador(e)}} /> 
                        <button className="mais">+</button> 
                    </div>
                </div>

                <div className="ContainerInputAdicionar">
                    {/* <span className="imgCampos"><img src={armario} width={45} alt="armario"></img></span> */}
                    <input type="text" name="marca" className="InputAdicionarProdutos" required placeholder="Marca"/>
                </div>

                <div className="ContainerInputAdicionar">
                    <input type="text" name="unidade" className="InputAdicionarProdutos" required placeholder="Unidade(s)"/>
                    {/* <span className="imgCampos"><img src={balança} width={45} alt="balança"></img></span> */}
                </div>

                <div className="ContainerInputAdicionar">
                    <input type="text" name="dataDeValidade" className="InputAdicionarProdutos" required placeholder="Data Validade"/>
                    {/* <span className="imgCampos"><img src={calendario} width={45} alt="calendario"></img></span> */}
                </div>

                <div className="ContainerInputAdicionar">
                    <input type="text" name="local_id" className="InputAdicionarProdutos" required placeholder="Despensa"/>
                    {/* <span className="imgCampos"><img src={despesas} width={45} alt="despensas"></img></span> */}
                </div>


                <div className="ContainerInputAdicionar">
                    <input type="text" name="categoria_id" className="InputAdicionarProdutos" required placeholder="Bebidas" />
                    {/* <span className="imgCampos"><img src={bebidas} width={45} alt="bebidas"></img></span>  */}
                </div> 

                <div className="ContainerInputAdicionar">
                    <input type="text" name="img" className="InputAdicionarProdutos" required placeholder="Imagem" />
                    {/* <span className="imgCampos"><img src={bebidas} width={45} alt="bebidas"></img></span>  */}
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