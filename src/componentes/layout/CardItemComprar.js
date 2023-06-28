import "./CardItemComprar.css";
import CaixaDeLeite from "../../img/caixaDeLeite.png"
import CaideDeSucoDeLaranja from "../../img/CaixaDeSucoDeLaranja.png";
import PoteDeYogurt from "../../img/PoteDeYogurt.png";


const CardItemComprar = ({img,nomeProduto, quantidade, userId ,idListaCompras}) => {

    const handleItemComprado = async (e, idListaCompras) => {
        e.preventDefault();
        try{
            const responseItemComprado = await fetch(`http://localhost:3000/listaCompras/itemComprado/${idListaCompras}`,{
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": sessionStorage.getItem("token"),
                }
            });
            return responseItemComprado
        }catch(error){
            console.log(error);
        }
    }
    const handleItemExcluido = async (e,idListaCompras) =>{
        e.preventDefault();
        try{
            const responseDelete = await fetch(`http://localhost:3000/listaCompras/delete/${idListaCompras}`,{
                method:"DELETE",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": sessionStorage.getItem("token"),
                }
            });
            
            // window.location.href = `/listadecompras/${userId}`;
            return responseDelete;
        }catch(error){
            console.log(error);
        }
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
        <div className="ContainerCardListaCompras">
        <div className="nomeImagemItemCompras">
            <img className="imagemDoCardLista" src={imagemProduto} width={65} />
            <h1 className="nomeiteComprar">{nomeProduto}</h1>
        </div>
        <div className="quantidadeItem">
            <h1>{quantidade}</h1>
            <button onClick={(e)=>{handleItemComprado(e, idListaCompras)}} className="btnConfirmarCompra">Item Comprado</button>
            <button onClick={(e)=>{handleItemExcluido(e, idListaCompras)}}className="BtnExcluirItem">Excluir Item</button>
        </div>
    </div>

    )
}

export default CardItemComprar;