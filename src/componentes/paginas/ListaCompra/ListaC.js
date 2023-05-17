import Navbar from "../../layout/NavBar";
import CardItemComprar from "../../layout/CardItemComprar";
import Container from "../../layout/Container";
import { Link } from "react-router-dom";
import caixaDeLeite from "../../../img/caixaDeLeite.png"
import btnVoltar from "../../../img/Botão de voltar.png";
import "./ListaC.css";

const ListaC = () =>{

    return (
        <div className="ContainerListaC">
                <Navbar />
            <div className="BarravoltarListaC">  
                <Link to={`/home`}><img src={btnVoltar} width={35}/></Link>
                <h1>Lista de Compras</h1>
            </div>
                <Container containerMod='TelaProdutos'>
                    <CardItemComprar img={caixaDeLeite} nomeProduto={"Leite"} quantidade={5}/>
                    <CardItemComprar />
                </Container>
        </div>
    )
}

export default ListaC;