import "./CardItemComprar.css";


const CardItemComprar = ({img,nomeProduto, quantidade, userId ,idListaCompras}) => {
//como vamos receber as imagens atravez da string acredito que vamos precisa fazer uma validação semelhante a esta:
    // let imagem;
    // if (img == "caixaDeLeite"){
    //     imagem = caixaDeLeite;
    // }

    const handleItemComprado = async (e, userId) => {

    }
    const handleItemExcluido = async (e,idListaCompras, userId) =>{
        e.preventDefault();
        try{
            const respondeDelete = await fetch(`http://localhost:3000/listaCompras/delete/${idListaCompras}`,{
                method:"DELETE",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": sessionStorage.getItem("token"),
                }
            });
            
            window.location.href = `/listadecompras/${userId}`;
            // console.log(respondeDelete)
            return respondeDelete;
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className="ContainerCardListaCompras">
        <div className="nomeImagemItemCompras">
            <img className="imagemDoCardLista" src={img} width={65} />
            <h1 className="nomeiteComprar">{nomeProduto}</h1>
        </div>
        <div className="quantidadeItem">
            <h1>{quantidade}</h1>
            <button onClick={(e)=>{handleItemComprado(e, userId)}} className="btnConfirmarCompra">Item Comprado</button>
            <button onClick={(e)=>{handleItemExcluido(e, idListaCompras ,userId)}}className="BtnExcluirItem">Excluir Item</button>
        </div>
    </div>

    )
}

export default CardItemComprar;