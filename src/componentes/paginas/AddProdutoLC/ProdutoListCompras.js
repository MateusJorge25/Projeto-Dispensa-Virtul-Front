import NavBarProdutos from "../../layout/NavBarProdutos";
import AdiconarProdutos from "../../layout/AdicionarListaProdut";
import Container from "../../layout/Container";


const ProdutoListCompras = () => {

    return (

        <div> 
        <NavBarProdutos />
        <Container>
            <AdiconarProdutos tela="Adiconar Produto na Lista de Compras" textButton="Adicionar"/>
        </Container>
        </div>

    )
}

export default ProdutoListCompras;