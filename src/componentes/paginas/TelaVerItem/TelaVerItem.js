import "./TelaVerItem.css";
import NavBar from "../../layout/NavBar/NavBar";
import Container from "../../layout/Container";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import btnVoltar from "../../../img/Botão de voltar.png";
import CaixaDeLeite from "../../../img/caixaDeLeite.png";
import Prateleira from "../../../img/Prateleira.png";
import IconQuantidade from "../../../img/iconQuantidade.png";
import IconMedida from "../../../img/balança.png";
import Calendario from "../../../img/iconItensAVencer.png";
import IconLote from "../../../img/caixa.png";
import Lavanderia from "../../../img/MaquinaDeLavar.png";
import ArmarioCozinha from "../../../img/Armario de cozinha.png";
import Geladeira from "../../../img/Geladeira.png";
import TodosOsProdutos from "../../../img/Todos os Produtos.png";
import Bebidas from "../../../img/Bebidas.png";
import Frios from "../../../img/Frios.png";
import IconDeletar from "../../../img/IconDeletar.png"
import IconEditar from "../../../img/IconEditar.png"
import CaideDeSucoDeLaranja from "../../../img/CaixaDeSucoDeLaranja.png";
import PoteDeYogurt from "../../../img/PoteDeYogurt.png";
import iconListaCompras from "../../../img/iconListaDeCompras.png";
import { useEffect ,useState } from "react";
const TelaVerItem = () => {

    const { id } = useParams();
    const [Produto, setProduto] = useState(null);

    useEffect(()=>{
        const sendapi = async (id) =>{
            try{
            const response = await fetch(`http://localhost:3000/produtos/describe/${id}`,{
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": sessionStorage.getItem("token")
                }
            });
                const apijson = await response.json();
                setProduto(apijson);
                console.log(apijson);
            }catch(error){
                console.log(error)
            }
        };
        sendapi(id);
    },[]);

    const deleteElement = async(e,id) =>{
        e.preventDefault();
        try{
            const respondeDelete = await fetch(`http://localhost:3000/produtos/delete/${id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": sessionStorage.getItem("token")
                }
            })
            window.location.href = `/produtos/${Produto[0].user_id}`;
            return respondeDelete;
        }catch(error){

        }
    }

    if(Produto === null){
        return <div>Carregando</div>
    }


    // let img = Produto[0].ImgDespensa;
    // let imagem;
    // switch (img) {
    //     case "MaquinaDeLavar": imagem = Lavanderia;
    //     break;
    //     case "ArmarioDeCozinha": imagem = ArmarioCozinha;
    //     break;
    //     case "Prateleira": imagem = Prateleira;
    //     break;
    //     case "Geladeira": imagem = Geladeira;
    //     break;
    //     case "TodosOsProdutos": imagem = TodosOsProdutos;
    //     break;
    //     default:
    //         break;
    // }

    // let imgCategoria = Produto[0].ImGCategoria;
    // let imagemCategoria;
    // switch (imgCategoria) {
    //     case "Frios": imagemCategoria = Frios;
    //     break;
    //     case "Bebidas": imagemCategoria = Bebidas;
    //     break;
    //     default:
    //         break;
    // }
    let imgProduto = Produto[0].ImgProduto;
    let imagemProduto;
    switch (imgProduto) {
        case "Yogurt": imagemProduto = PoteDeYogurt;
        break;
        case "Leite": imagemProduto = CaixaDeLeite;
        break;
        case "SucoDeLaranja": imagemProduto = CaideDeSucoDeLaranja;
        break;
        default:
            break;
    }

    if(Produto[0].dataDeValidade != null){
        const dataf = Produto[0].dataDeValidade.slice(0,10);
        Produto[0].dataDeValidade = dataf;
    }

    return(
        <div className="ContainerTelaVerItem">
            <NavBar />
            <div className="BarravoltarVerItem">
                <Link to={`/produtos/${Produto[0].user_id}`}><img src={btnVoltar} width={35}/></Link>
                <h1>Ver Item</h1>
            </div>
            <Container containerMod = "TelaProdutos">
                <div className="containerNomeImgCategoriaInfoProduto">
                    <div className="NomeEImagemProduto">
                        <img src={imagemProduto ?? TodosOsProdutos} width={75}/>
                        <h1>{Produto[0].NomeProduto}</h1>
                    </div>
                    <span className="spansVerProdutos">
                        <img src={Prateleira} width={75}/>
                        <h1>{Produto[0].MarcaProduto}</h1>
                    </span>
                </div>
                <div className="containerMaisInformaçõesProduto">
                    <div className="primeiraLinhaDoContainer">
                    <span className="spansVerProdutos">
                        <img src={IconQuantidade} width={75}/>
                        <h1>{Produto[0].quantidade}</h1>
                    </span>
                    <span className="spansVerProdutos">
                        <img src={IconMedida} width={75}/>
                        <h1>{Produto[0].UnidadeProduto ?? "Unidade não informada"}</h1>
                    </span>
                    <span className="spansVerProdutos">
                        <img src={Calendario} width={75}/>
                        <h1>{Produto[0].dataDeValidade ?? "Validade não informada"}</h1>
                    </span>
                </div>
                    <div className="primeiraLinhaDoContainer">
                    <span className="spansVerProdutos">
                        <img src={IconLote} width={75}/>
                        <h1>{Produto[0].LoteProduto ?? "Lote não informadao"}</h1>
                    </span>
                    <span className="spansVerProdutos">
                        <img src={Bebidas} width={75}/>
                        <h1>{Produto[0].NomeCategoria ?? "Categoria não informada"}</h1>
                    </span>
                    <span className="spansVerProdutos">
                        <img src={Geladeira} width={75}/>
                        <h1>{Produto[0].NomeDespensa ?? "Despensa não informada"}</h1>
                    </span>
                    </div>
                </div>
                <div className="containerbotoes">
                    <Link>
                    <span className="spanscontainerBotoes">
                        <img src={iconListaCompras} width={60}/>
                        <h1>Adicionar na Lista de Compras</h1>
                    </span>
                    </Link>
                    <button className="BtnDeleteProduto" onClick={(e)=>{deleteElement(e,id)}}><img src={IconDeletar} width={75}/></button>
                    <Link to={`/produto/editar/${id}`}><img src={IconEditar} width={75}/></Link>
                </div>
            </Container>
        </div>
    )
}

export default TelaVerItem;

