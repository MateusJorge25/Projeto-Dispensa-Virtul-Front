import "../layout/CardDespensa.css";
import Geladeira from "../../img/iconGeladeira.png";
import Lavanderia from "../../img/lavanderia.png";
import ArmarioCozinha from "../../img/armarioCozinha.png";


const CardsDespesas = ({img ,nomeProduto}) => {
//como vamos receber as imagens atravez da string acredito que vamos precisa fazer uma validação semelhante a esta:
    // let imagem;
    // if (img == "caixaDeLeite"){
    //     imagem = caixaDeLeite;
    // }

    return (
        <div className="ContainerDespesas">
            <div className="nomeImagemDespensa">
                <img className="imagemDoCardCategoria" src={img} width={70} />
                <h1 className="nomeCategoria">{nomeProduto}</h1> 
            </div>
        </div>
    )
}

export default CardsDespesas;