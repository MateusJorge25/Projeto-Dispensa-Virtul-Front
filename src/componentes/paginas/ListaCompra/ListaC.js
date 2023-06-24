import Navbar from "../../layout/NavBar/NavBar";
import CardItemComprar from "../../layout/CardItemComprar";
import Container from "../../layout/Container";
import { Link, useParams } from "react-router-dom";
import caixaDeLeite from "../../../img/caixaDeLeite.png"
import btnVoltar from "../../../img/Botão de voltar.png";
import IconBtnAdicionar from "../../../img/BotãoAdicionar.png";
import "./ListaC.css";
import { useEffect , useState} from "react";

const ListaC = () =>{


    const {id} = useParams();
    const [Data, setData] = useState([]);

    useEffect(()=>{
        const sendApi = async (id) =>{
            const date  = await fetch(`http://localhost:3000/listaCompras/${id}`,{
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

    return (
        <div className="ContainerListaC">
                <Navbar />
            <div className="BarravoltarListaC">  
                <Link to={`/home/${id}`}><img src={btnVoltar} width={35}></img></Link>
                <h1>Lista de Compras</h1>
            </div>
                <Container containerMod='TelaProdutos'>
                { 
                    Data.length == 0 ? (
                        <p className="NullProdutos">Você Não Possui Nenhum Produto Cadastrado Para Comprar</p>    
                    ):(
                        Data.map((Element) => {
                        return <CardItemComprar key={Element.id} img={Element.img} nomeProduto={Element.nome} quantidade={Element.quantidade} userId={Element.user_id} idListaCompras={Element.id}/>
                    })
                    )
                }    
                <Link to={`/adicionar/listCompras/${id}`} className="BtnAdicionarProduto"><img src={IconBtnAdicionar} width={45}/></Link>
                </Container>
        </div>
    )
}

export default ListaC;