import Navbar from "../../layout/NavBar";
import Container from "../../layout/Container";
import { Link } from "react-router-dom";
import "./Despesa.css";
import CardDespesas from "../../layout/CardsDespesas";
import btnVoltar from "../../../img/Botão de voltar.png"
import Geladeira from "../../../img/iconGeladeira.png";
import Lavanderia from "../../../img/lavanderia.png";
import ArmarioCozinha from "../../../img/armarioCozinha.png";

const Despesa = () => {

    return (
        <div className="ContainerDespensaTela">
            <Navbar />
            <div className="BarravoltarProdutos">
                <Link to={`/home`}><img src={btnVoltar} width={35}/></Link>
                <h1>Despensa</h1>
            </div>
            <Container containerMod='TelaProdutos'>
                <CardDespesas img={Geladeira} nomeProduto={"Geladeira"} />
                <CardDespesas img={Lavanderia} nomeProduto={"Lavanderia"} />
                <CardDespesas img={ArmarioCozinha} nomeProduto={"Armario Cozinha"} />
            </Container>    
        </div>
    )






}


export default Despesa;