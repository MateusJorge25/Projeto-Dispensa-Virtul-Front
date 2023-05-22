import "../layout/CardDespensa.css";
import Lavanderia from "../../img/MaquinaDeLavar.png";
import ArmarioCozinha from "../../img/Armario de cozinha.png";
import Prateleira from "../../img/Prateleira.png";
import Geladeira from "../../img/Geladeira.png";
import TodosOsProdutos from "../../img/Todos os Produtos.png";

const CardsDespesas = ({img ,nomeProduto}) => {
//como vamos receber as imagens atravez da string acredito que vamos precisa fazer uma validação semelhante a esta:
    let imagem;
    switch (img) {
        case "MaquinaDeLavar": imagem = Lavanderia;
        break;
        case "ArmarioDeCozinha": imagem = ArmarioCozinha;
        break;
        case "Prateleira": imagem = Prateleira;
        break;
        case "Geladeira": imagem = Geladeira;
        break;
        case "TodosOsProdutos": imagem = TodosOsProdutos;
        break;
        default:
            break;
    }

    return (
        <div className="ContainerDespesas">
            <div className="nomeImagemDespensa">
                <img className="imagemDoCardCategoria" src={imagem} width={70} />
                <h1 className="nomeCategoria">{nomeProduto}</h1> 
            </div>
        </div>
    )
}

export default CardsDespesas;