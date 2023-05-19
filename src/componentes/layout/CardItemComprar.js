import "./CardItemComprar.css";


const CardItemComprar = ({img,nomeProduto, quantidade}) => {
//como vamos receber as imagens atravez da string acredito que vamos precisa fazer uma validação semelhante a esta:
    // let imagem;
    // if (img == "caixaDeLeite"){
    //     imagem = caixaDeLeite;
    // }

    return (
        <div className="ContainerCardListaCompras">
        <div className="nomeImagemItemCompras">
            <img className="imagemDoCardLista" src={img} width={65} />
            <h1 className="nomeiteComprar">{nomeProduto}</h1>
        </div>
        <div className="quantidadeItem">
            <h1>{quantidade}</h1>
            <button className="btnConfirmarCompra">Item Comprado</button>
            <button className="BtnExcluirItem">Excluir Item</button>
        </div>
    </div>

    )
}

export default CardItemComprar;