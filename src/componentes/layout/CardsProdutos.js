import "../layout/CardProdutos.css"
import Geladeira from "../../img/iconGeladeira.png";
import IconValidade from "../../img/iconItensAVencer.png";

const CardProdutos = ({img ,nomeProduto,quantidade, despensa, validade}) => {
//como vamos receber as imagens atravez da string acredito que vamos precisa fazer uma validação semelhante a esta:
    // let imagem;
    // if (img == "caixaDeLeite"){
    //     imagem = caixaDeLeite;
    // }

    return (
        <div className="ContainerCardProdutos">
            <div className="nomeImagemProduto">
                <img className="imagemDoCard" src={img} width={70} />
                <h1 className="nomeProduto">{nomeProduto}</h1>
            </div>
            <div className="InformacoesProdutos">
                <div className="containerInformacoes"><span className="NumeroQuantidade">{quantidade}</span><h1 className="H1Card">Unidade</h1></div>
                <div className="containerInformacoes"><img src={Geladeira} width={25}></img><h1 className="H1Card">{despensa}</h1></div>
                <div className="containerInformacoes"><img src={IconValidade} width={25}></img><h1 className="H1Card">{validade}</h1></div>
            </div>
        </div>
    )
}

export default CardProdutos;