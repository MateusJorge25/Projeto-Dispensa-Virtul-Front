import Navbar from "../../layout/NavBar";
import Container from "../../layout/Container";
import { Link, useParams } from "react-router-dom";
import "./Despesa.css";
import CardDespesas from "../../layout/CardsDespensas";
import btnVoltar from "../../../img/Botão de voltar.png"
import Geladeira from "../../../img/iconGeladeira.png";
import Lavanderia from "../../../img/lavanderia.png";
import ArmarioCozinha from "../../../img/armarioCozinha.png";

const Despesa = () => {

    const{ id } = useParams();

    const sendApi = async (id) =>{
        const date  = await fetch(`http://localhost:3000/local/${id}`,{
            method:"GET",
            headers:{
                "Authorization": sessionStorage.getItem("token")
            }
        })

        const apijson = await date.json();
        console.log(apijson);
        return apijson;
    }

    const elementos = sendApi(id);
    let forEachCountries;

    return (
        <div className="ContainerDespensaTela">
            <Navbar />
            <div className="BarravoltarProdutos">
                <Link to={`/home/${id}`}><img src={btnVoltar} width={35}/></Link>
                <h1>Despensa</h1>
            </div>
            <Container containerMod='TelaProdutos'>  
                <CardDespesas img={"img"} nomeProduto={"nome"} />
            </Container>
        </div>
    )






}


export default Despesa;