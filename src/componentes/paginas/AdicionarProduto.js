import Navbar from "../layout/NavBar";
import AdiconarProdutos from "../layout/AdicionarProdutos";
import Container from "../layout/Container";

const AdicionarProduto = () => {

    return (

        <div> 
        <Container>
            <Navbar />
            <AdiconarProdutos tela="Adicionar Produto" textButton="Adicionar"/>
        </Container>
        </div>

    )
}

export default AdicionarProduto;