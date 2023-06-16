import { Link, useParams } from "react-router-dom";
import Navbar from "../../layout/NavBar/NavBar";
import "./TotalCategorias.css";
import Container from "../../layout/Container";
import IconBtnAdicionar from "../../../img/BotãoAdicionar.png";
import btnVoltar from "../../../img/Botão de voltar.png";
import { useState, useEffect } from "react";
import CardCategorias from "../../layout/CardsCategorias";

const TotalCategorias = () => {

    const {id} = useParams();
    const [Data, setData] = useState(null);

    useEffect(()=>{
        const sendApi = async (id) =>{
            const date  = await fetch(`http://localhost:3000/categorias/${id}`,{
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
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

    if(Data === null){
        return <div>Carregando...</div>
    }


    return (
        <div className="ContainerTotalProdutos">
            <Navbar />
            <div className="BarravoltarProdutos">
                <Link to={`/home/${id}`}><img src={btnVoltar} width={35}/></Link>
                <h1>Total as Categorias</h1>
            </div>
            <Container containerMod='TelaProdutos'>  
            { 
                Data.length == 0 ? (
                    <p className="NullProdutos">Você Não Possui Nenhum Categoria Cadastrado</p>    
                ):(
                    Data.map((Element) => {
                    return <CardCategorias key={Element.id} nome={Element.nome} img={Element.img} idCategoria={Element.id} idUser={id}/>
                })
                )
            }
            <Link to={`/categoria/adicionar/${id}`} className="BtnAdicionarProduto"><img src={IconBtnAdicionar} width={45}/></Link>
            </Container>
        </div>
    )
}

export default TotalCategorias;