import IconValidade from "../../../img/iconItensAVencer.png";
import Lavanderia from "../../../img/MaquinaDeLavar.png";
import ArmarioCozinha from "../../../img/Armario de cozinha.png";
import Prateleira from "../../../img/Prateleira.png";
import Geladeira from "../../../img/Geladeira.png";
import TodosOsProdutos from "../../../img/Todos os Produtos.png";
import CaixaDeLeite from "../../../img/caixaDeLeite.png";
import CaideDeSucoDeLaranja from "../../../img/CaixaDeSucoDeLaranja.png";
import PoteDeYogurt from "../../../img/PoteDeYogurt.png";
import tresPontinho from "../../../img/tresPontinhos.png";
import iconDeletar from "../../../img/IconDeletar.png";
import { useState } from "react";

const CardItemVencido = ({img ,nomeProduto,quantidade, despensa, validade, imgDespensa,idProduto}) => {

    const [isMenuVisible, setIsMenuVisible] = useState(false);


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

    const handleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const handleDeleteProduto = async (e, idProduto)=>{
        e.preventDefault();
        try{
            const respondeDelete = await fetch(`http://localhost:3000/produtos/delete/${idProduto}`,{
                method:"DELETE",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": sessionStorage.getItem("token")
                }
            })
            return respondeDelete;
        }catch(error){

        }
    }

        return (
            <div className="ContainerCardProdutos">
                <div className="nomeImagemProduto">
                    <img className="imagemDoCard" src={imagemProduto} alt="Imagem Produto" width={70} />
                    <h1 className="nomeProduto">{nomeProduto}</h1>
                </div>
                <div className="InformacoesProdutos">
                <div className="containerbtnMenu">
                    <button onClick={handleMenu} className="btnTresOpt"><img src={tresPontinho} alt="opções do produto" width={30}/></button>
                </div>
                <div className="containerbtncartDespensa">
                    {isMenuVisible &&(
                        <ul className="ulDespensa">
                            <li className="itemsMenu"><button className="btnDelDespensa" onClick={(e) => {handleDeleteProduto(e, idProduto)}}><img src={iconDeletar} alt="Imagem Deletar" width={20}/>Excluir</button></li>
                        </ul>
                    )}
                </div>
                    <div className="containerInformacoes"><span className="NumeroQuantidade">{quantidade}</span><h1 className="H1Card">Unidade</h1></div>
                    <div className="containerInformacoes"><img src={imagemDespensa} alt="Imagem Despensa" width={25}></img><h1 className="H1Card">{despensa}</h1></div>
                    <div className="containerInformacoes"><img src={IconValidade} alt="Imagem Validade" width={25}></img><h1 className="H1Card" style={{color:"#DC1D25"}}>Vencido em {validade}</h1></div>
                </div>
            </div>
        )
}

export default CardItemVencido;