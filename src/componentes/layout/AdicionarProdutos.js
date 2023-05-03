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


const AdicionarProdutos = ({tela, textButton}) =>{

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
                    <span className="imgCampos"><img src={caixa} width={30}></img></span>   
                </div>
                
                <div className="ContainerInputAdicionar">
                    <input type="text" name="Lote" className="InputAdicionarProdutos" placeholder="Quantidade" disabled />
                    <span className="imgCampos"><img src={setaCima} width={30}></img></span>
                    {/*<button className="menos">-</button><input type="text" className="contador"/> <button className="mais">+</button>*/}
                
                </div>

                <div className="ContainerInputAdicionar">
                    <input type="text" name="Lote" className="InputAdicionarProdutos" placeholder="Marca"/>
                    <span className="imgCampos"><img src={armario} width={30}></img></span>
                </div>

                <div className="ContainerInputAdiconar">
                    <input type="text" name="Lote" className="InputAdicionarProdutos" placeholder="Unidade(s)"/>
                    <span className="imgCampos"><img src={balança} width={30}></img></span>
                </div>

                <div className="ContainerInputAdicionar">
                    <input type="text" name="Lote" className="InputAdicionarProdutos" placeholder="Data Validade"/>
                    <span className="imgCampos"><img src={calendario} width={30}></img></span>
                </div>

                <div className="ContainerInputAdicionar">
                    <input type="text" name="Lote" className="InputAdicionarProdutos" placeholder="Despensa"/>
                    <span className="imgCampos"><img src={despesas} width={30}></img></span>
                </div>


                <div className="ContainerInputAdicionar">
                    <input type="text" name="Lote" className="InputAdicionarProdutos" placeholder="Bebidas" />
                    <span className="imgCampos"><img src={bebidas} width={30}></img></span> 
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