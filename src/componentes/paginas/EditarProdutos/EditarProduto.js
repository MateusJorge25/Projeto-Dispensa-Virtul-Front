import NavBarProdutos from "../../layout/NavBarProdutos";
import EditarProduto from "../../layout/EditarProdutos";
import Container from "../../layout/Container";
import  "./EditarProduto.css";

const EditarProdutos = () => {

    return (

        <div> 
        <Container>
            <NavBarProdutos />
            <EditarProduto tela="Editar Produto" textButton="Salvar"/>
        </Container>
        </div>

    )
}

export default EditarProdutos;