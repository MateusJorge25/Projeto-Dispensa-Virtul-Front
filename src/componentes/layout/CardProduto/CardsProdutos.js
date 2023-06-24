import "./CardProdutos.css"
import IconValidade from "../../../img/iconItensAVencer.png";
import Lavanderia from "../../../img/MaquinaDeLavar.png";
import ArmarioCozinha from "../../../img/Armario de cozinha.png";
import Prateleira from "../../../img/Prateleira.png";
import Geladeira from "../../../img/Geladeira.png";
import TodosOsProdutos from "../../../img/Todos os Produtos.png";
import CaixaDeLeite from "../../../img/caixaDeLeite.png";
import CaideDeSucoDeLaranja from "../../../img/CaixaDeSucoDeLaranja.png";
import PoteDeYogurt from "../../../img/PoteDeYogurt.png";
import SetaDireita from "../../../img/Seta cards.png";
import { Link } from "react-router-dom";

const CardProdutos = ({img ,nomeProduto,quantidade, despensa, validade, imgDespensa,idProduto}) => {
let imagemDespensa;
switch (imgDespensa) {
    case "MaquinaDeLavar": imagemDespensa = Lavanderia;
    break;
    case "ArmarioDeCozinha": imagemDespensa = ArmarioCozinha;
    break;
    case "Prateleira": imagemDespensa = Prateleira;
    break;
    case "Geladeira": imagemDespensa = Geladeira;
    break;
    case "TodosOsProdutos": imagemDespensa = TodosOsProdutos;
    break;
    default:
        break;
}
let imagemProduto;
switch (img) {
    case "Yogurt": imagemProduto = PoteDeYogurt;
    break;
    case "Leite": imagemProduto = CaixaDeLeite;
    break;
    case "SucoDeLaranja": imagemProduto = CaideDeSucoDeLaranja;
    break;
    default:
        break;
}

    return (
        <div className="ContainerCardProdutos">
            <div className="nomeImagemProduto">
                <img className="imagemDoCard" src={imagemProduto} alt="Imagem produto" width={70} />
                <h1 className="nomeProduto">{nomeProduto}</h1>
            </div>
            <div className="InformacoesProdutos">
                <Link to ={`/produto/info/${idProduto}`} className="Btncard"><img src={SetaDireita} alt="Imagem Seta para a direita" width={25}/></Link>
                <div className="containerInformacoes"><span className="NumeroQuantidade">{quantidade}</span><h1 className="H1Card">Unidade</h1></div>
                <div className="containerInformacoes"><img src={imagemDespensa} alt="Imagem Depensa" width={25}></img><h1 className="H1Card">{despensa}</h1></div>
                <div className="containerInformacoes"><img src={IconValidade} alt="Imagem Validade" width={25}></img><h1 className="H1Card">{validade}</h1></div>
            </div>
        </div>
    )
}

export default CardProdutos;