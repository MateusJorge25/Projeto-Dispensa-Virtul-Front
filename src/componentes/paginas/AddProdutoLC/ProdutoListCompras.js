import NavBarProdutos from "../../layout/NavBarProdutos";
import AdiconarProdutos from "../../layout/ProdutoListCompras";
import Container from "../../layout/Container";


const ProdutoListCompras = () => {

    return (

        <div> 
        <Container>
            <NavBarProdutos />
            <AdiconarProdutos tela="Adiconar Produto na Lista de Compras" textButton="Adicionar"/>
        </Container>
        </div>

    )
}

export default ProdutoListCompras;