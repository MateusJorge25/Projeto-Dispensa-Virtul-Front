import { Link, useParams } from "react-router-dom";
import Navbar from "../../layout/NavBar";
import CardProdutos from "../../layout/CardsProdutos";
import "./TotalProdutos.css";
import Container from "../../layout/Container";
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
                    "Authorization": sessionStorage.getItem("token")
                }
            })
            const apijson = await date.json();
            setData(apijson);
            console.log(apijson);
            return apijson;
        };
        sendApi(id);
    },[])

    return (
        <div className="ContainerTotalProdutos">
            <Navbar />
            <div className="BarravoltarProdutos">
                <Link to={`/home/${id}`}><img src={btnVoltar} width={35}/></Link>
                <h1>Total de Produtos</h1>
            </div>
            <Container containerMod='TelaProdutos'>  
                {
                    Data.map((Element) => {
                        return <CardProdutos img={Element.ImgProduto} nomeProduto={Element.NomeProduto} quantidade={Element.quantidade} despensa={Element.NomeDespensa} validade={Element.dataDeValidade.substr(0,10)} imgDespensa={Element.ImgDespensa} idProduto={Element.IdProdutos}/>
                    })
                }
            </Container>
        </div>
    )
}

export default TotalProdutos;