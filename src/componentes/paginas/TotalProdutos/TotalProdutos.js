import { Link } from "react-router-dom";
import Navbar from "../../layout/NavBar";
import CardProdutos from "../../layout/CardsProdutos";
import "./TotalProdutos.css";
import Container from "../../layout/Container";
import caixaDeLeite from "../../../img/caixaDeLeite.png"
import btnVoltar from "../../../img/Botão de voltar.png"

const TotalProdutos = () => {

    return (
        <div className="ContainerTotalProdutos">
            <Navbar />
            <div className="BarravoltarProdutos">
                <Link to={`/home`}><img src={btnVoltar} width={35}/></Link>
                <h1>Total de Produtos</h1>
            </div>
            <Container containerMod='TelaProdutos'>
                <CardProdutos img={caixaDeLeite} nomeProduto={"Leite"} quantidade={2} despensa={"Geladeira"} validade={"10/9/2024"}/>
                <CardProdutos img={caixaDeLeite} nomeProduto={"Leite"} quantidade={2} despensa={"Geladeira"} validade={"10/9/2024"}/>
            </Container>
        </div>
    )
}

export default TotalProdutos;