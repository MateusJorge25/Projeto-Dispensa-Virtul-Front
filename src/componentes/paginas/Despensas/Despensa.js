import Navbar from "../../layout/NavBar/NavBar";
import Container from "../../layout/Container";
import { Link, useParams } from "react-router-dom";
import "./Despensa.css";
import { useEffect, useState } from "react";
import CardDespesas from "../../layout/CardsDespensas";
import btnVoltar from "../../../img/Botão de voltar.png"
import IconBtnAdicionar from "../../../img/BotãoAdicionar.png"


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
            return apijson;
        };
        sendApi(id);
    },[Data])

    if (Data.length === 0) {
        return (<Container containerMod='TelaProdutos'> <div className="NullProdutos">Carregando...</div> </Container>)
    }
    

    return (
        <div className="ContainerDespensaTela">
            <Navbar />
            <div className="BarravoltarProdutos">
                <Link className="LinkBtnVoltar" to={`/home/${id}`}><img src={btnVoltar} alt="Imagem Voltar" width={35}/></Link>
                <h1>Despensas</h1>
            </div>
            <Container containerMod='TelaProdutos'>  
            { Data.length === 0 || Data[0].hasOwnProperty("message")?(
                    <p className="NullProdutos">Você Não Possui Nenhuma Despensa Cadastrado</p>    
                ):(
                Data.map((Element) => {
                    return <CardDespesas key={Element.id} img={Element.img} nomeProduto={Element.nome} idDespensa={Element.id} idUser={Element.user_id} status={Element.status}/>
                }))
            }
            <Link to={`/despensa/adicionar/${id}`} className="BtnAdicionarCategoria"><img src={IconBtnAdicionar} alt="Imagem Adicionar" width={45}/></Link>
                
            </Container>
        </div>
    )
}


export default Despesa;