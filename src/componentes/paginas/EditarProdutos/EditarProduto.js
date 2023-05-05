import NavBarProdutos from "../../layout/NavBarProdutos";
import AdiconarProdutos from "../../layout/AdicionarProdutos";
import Container from "../../layout/Container";
import  "./EditarProduto.css";

const EditarProduto = () => {

    return (

        <div> 
        <Container>
            <NavBarProdutos />
            <AdiconarProdutos tela="Editar Produto" textButton="Salvar"/>
        </Container>
        </div>

    )
}

export default EditarProduto;