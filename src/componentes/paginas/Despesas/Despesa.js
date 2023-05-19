import Navbar from "../../layout/NavBar";
import Container from "../../layout/Container";
import { Link, useParams } from "react-router-dom";
import "./Despesa.css";
import { useEffect, useState } from "react";
import CardDespesas from "../../layout/CardsDespensas";
import btnVoltar from "../../../img/Botão de voltar.png"
import Geladeira from "../../../img/iconGeladeira.png";
import Lavanderia from "../../../img/lavanderia.png";
import ArmarioCozinha from "../../../img/armarioCozinha.png";

const Despesa = () => {

    const{ id } = useParams();
    const [Data, setData] = useState([]);

    useEffect(()=>{
        const sendApi = async (id) =>{
            const date  = await fetch(`http://localhost:3000/local/${id}`,{
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
        <div className="ContainerDespensaTela">
            <Navbar />
            <div className="BarravoltarProdutos">
                <Link to={`/home/${id}`}><img src={btnVoltar} width={35}/></Link>
                <h1>Despensa</h1>
            </div>
            <Container containerMod='TelaProdutos'>  
            {
                Data.map((Element) => {
                    return <CardDespesas img={Element.img} nomeProduto={Element.nome}/>
                })
            }
                
            </Container>
        </div>
    )
}


export default Despesa;