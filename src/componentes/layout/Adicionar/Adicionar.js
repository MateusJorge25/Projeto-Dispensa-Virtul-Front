import { Link } from "react-router-dom";
import Container from "./Container";
import './Adicionar.css';
import btnVoltar from "../../img/Botão de voltar.png";
import btnsetaBaixo from "../../img/seta baixo.png";

const adicionar = ({tela, placeholderName, textButton, placeholderImg}) =>{

    return(
        <div className="adicionar" >
            <Container containerMod="telaAdicionar">
                <div className="Barravoltar">
                    <Link to={`/home`}><img src={btnVoltar} width={35}/></Link>
                    <h1>{tela}</h1>
                </div>
                <div className="ContainerInputAdicionar">
                    <input type="text" name="nome" className="InputAdicionar" placeholder={placeholderName}/>    
                </div>
                <div className="ContainerInputAdicionar">
                    <input type="text" name="img" className="InputAdicionar" placeholder={placeholderImg}/>
                    <span><img src={btnsetaBaixo} width={45}></img></span>
                </div>

                <div className="BtnsAdicionar">
                    <button className="BtnCancelar">Cancelar</button>
                    <button className="BtnAdicionar">{textButton}</button>
                </div>
            </Container>
        </div>
    )   
}

export default adicionar;