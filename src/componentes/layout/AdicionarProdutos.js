import { Link } from "react-router-dom";
import Container from "./Container";
import './AdicionarProdutos.css';
import btnVoltar from "../../img/Botão de voltar.png";
import caixa from "../../img/caixa.png";
import setaCima from "../../img/seta cima.png";
import armario from "../../img/armario.png";
import balança from "../../img/balança.png";
import calendario from "../../img/calendario.png";
import despesas from "../../img/despesas.png";
import bebidas from "../../img/bebidas.png";
import { useState } from 'react'



const AdicionarProdutos = ({tela, textButton}) =>{


    const [Contador, setContador] = useState("0");

    const handleContador = (event) => {
        setContador(event.target.value);
    };

    return(

        <div className="adicionar" >
        
            

            <Container containerMod="telaAdicionar">
                <div className="Barravoltar">
                    <Link to={`/home`}><img src={btnVoltar} width={45}/></Link>    
                    <h1>{tela}</h1>
                </div>
                
                <div className="ContainerInputAdicionar">
                    <input type="text" name="nome" className="InputAdicionarProdutos" placeholder="Nome"/>
                </div>

                <div className="ContainerInputAdicionar">
                    <input type="text" name="Lote" className="InputAdicionarProdutos" placeholder="Lote"/>
                    <span className="imgCampos"><img src={caixa} width={45}></img></span>   
                </div>
                
                <div className="ContainerInputAdicionar">
                    <input type="text" name="Lote" className="InputAdicionarProdutos" placeholder="Quantidade" disabled />
                    <span className="imgCampos"><img src={setaCima} width={45}></img></span>
                    <div className="containerButtonsContadores">
                        <button className="menos">-</button>
                        <input type="text" className="contador" required value={Contador} onChange={(e)=> {handleContador(e)}} /> 
                        <button className="mais">+</button> 
                    </div>
                </div>

                <div className="ContainerInputAdicionar">
                    <span className="imgCampos"><img src={armario} width={45}></img></span>
                    <input type="text" name="Lote" className="InputAdicionarProdutos" placeholder="Marca"/>
                </div>

                <div className="ContainerInputAdicionar">
                    <input type="text" name="Lote" className="InputAdicionarProdutos" placeholder="Unidade(s)"/>
                    <span className="imgCampos"><img src={balança} width={45}></img></span>
                </div>

                <div className="ContainerInputAdicionar">
                    <input type="text" name="Lote" className="InputAdicionarProdutos" placeholder="Data Validade"/>
                    <span className="imgCampos"><img src={calendario} width={45}></img></span>
                </div>

                <div className="ContainerInputAdicionar">
                    <input type="text" name="Lote" className="InputAdicionarProdutos" placeholder="Despensa"/>
                    <span className="imgCampos"><img src={despesas} width={45}></img></span>
                </div>


                <div className="ContainerInputAdicionar">
                    <input type="text" name="Lote" className="InputAdicionarProdutos" placeholder="Bebidas" />
                    <span className="imgCampos"><img src={bebidas} width={45}></img></span> 
                </div> 

                
                <div className="BtnsAdicionar">
                    <button className="BtnCancelar">Cancelar</button>
                    <button className="BtnAdicionar">{textButton}</button>
                </div>
            </Container>
        </div>
    )   
}

export default AdicionarProdutos;