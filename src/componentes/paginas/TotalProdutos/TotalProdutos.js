import { Link, useParams } from "react-router-dom";
import Navbar from "../../layout/NavBar/NavBar";
import CardProdutos from "../../layout/CardProduto/CardsProdutos";
import "./TotalProdutos.css";
import Container from "../../layout/Container";
import IconBtnAdicionar from "../../../img/BotãoAdicionar.png";
import btnVoltar from "../../../img/Botão de voltar.png";
import { useState, useEffect } from "react";

const TotalProdutos = () => {

    const {id} = useParams();
    const [Data, setData] = useState([]);

    useEffect(()=>{
        const sendApi = async (id) =>{
            const date  = await fetch(`http://localhost:3000/produtos/${id}`,{
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": sessionStorage.getItem("token")
                }
            })
            const apijson = await date.json();
            setData(apijson);
            return apijson;
        };
        sendApi(id);
    },Data)

    return (
        <div className="ContainerTotalProdutos">
            <Navbar />
            <div className="BarravoltarProdutos">
                <Link to={`/home/${id}`}><img src={btnVoltar} alt="Imagem Voltar" width={35}/></Link>
                <h1>Total de Produtos</h1>
            </div>
            <Container containerMod='TelaProdutos'>  
            { 
                Data.length === 0 ? (
                    <p className="NullProdutos">Você Não Possui Nenhum Produto Cadastrado</p>    
                ):(
                    Data.map((Element) => {
                    return <CardProdutos key={Element.IdProdutos} img={Element.ImgProduto} nomeProduto={Element.NomeProduto} quantidade={Element.quantidade}
                    despensa={Element.NomeDespensa} validade={Element.dataDeValidade.slice(0,10)} imgDespensa={Element.ImgDespensa} idProduto={Element.IdProdutos}/>
                })
                )
            }
            <Link to={`/produto/adicionar/${id}`} className="BtnAdicionarProduto"><img src={IconBtnAdicionar} alt="Imagem Adicionar" width={45}/></Link>
            </Container>
        </div>
    )
}

export default TotalProdutos;