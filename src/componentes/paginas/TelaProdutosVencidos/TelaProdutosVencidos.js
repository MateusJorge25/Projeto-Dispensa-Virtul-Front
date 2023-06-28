import { useParams } from "react-router-dom";
import Container from "../../layout/Container";
import NavBar from "../../layout/NavBar/NavBar";
import "./TelaProdutosVencidos.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import btnVoltar from "../../../img/Botão de voltar.png";
import CardItemVencido from "../../layout/CardItemVencido/CardIemVencido";

const TelaProdutosVencidos = () =>{

    const {id} = useParams();
    const [Data, setData] = useState([]);

    useEffect(()=>{
        const getApi = async(id) =>{
            const Api = await fetch(`http://localhost:3000/produtos/vencidos/${id}`,{
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": sessionStorage.getItem("token")
                }
            })
            const ResJson = await Api.json();
            setData(ResJson);
        }
        getApi(id)
    },Data)


    return(
        <div className="ContainerProdutosVencidos">
            <NavBar/>
            <div className="BarravoltarProdutos">
                <Link className="LinkBtnVoltar" to={`/home/${id}`}><img src={btnVoltar} alt="botão voltar" width={35}/></Link>
                <h1>Produtos Vencidos</h1>
            </div>
            <Container containerMod='TelaProdutos'>
            { 
                Data.length === 0 || Data[0].hasOwnProperty('message') ? (
                    <p className="NullProdutos">Nenhum Produto Vencido</p>    
                ):(
                    Data.map((Element) => {
                    return <CardItemVencido key={Element.IdProduto} img={Element.ImgProduto} nomeProduto={Element.NomeProduto} 
                            quantidade={Element.quantidade} despensa={Element.NomeDespensa} validade={Element.dataDeValidade.slice(0,10)} 
                            imgDespensa={Element.ImgDespensa} idProduto={Element.IdProduto}/>
                })
                )
            }
            </Container>
        </div>
    )
}

export default TelaProdutosVencidos;