import { Link } from "react-router-dom";
import Container from "./Container";
import './Adicionar.css';
import btnVoltar from "../../img/Botão de voltar.png";

const adicionar = ({tela, placeholder}) =>{

    return(
        <div className="adicionar" >
            <Container containerMod="telaAdicionar">
                <div className="Barravoltar">
                    <Link to={`/home`}><img src={btnVoltar} width={45}/></Link>
                    <h1>Cadastro {tela}</h1>
                </div>
                <div className="ContainerInputAdicionar">
                    <input type="text" name="nome" className="InputAdicionar" placeholder={placeholder}/>
                </div>
                
                <div className="BtnsAdicionar">
                    <button className="BtnCancelar">Cancelar</button>
                    <button className="BtnAdicionar">Adicionar</button>
                </div>
            </Container>
        </div>
    )
}

export default adicionar;