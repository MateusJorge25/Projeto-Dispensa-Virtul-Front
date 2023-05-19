import Navbar from "../../layout/NavBar";
import Adicionar from "../../layout/Adicionar";
import "./EditarCategoria.css";

const EditarCategoria = () => {

    return (
        <div className="ContainerEditarCategoria">
                <Navbar />
                <Adicionar placeholderName="Nome Categoria"  tela=" Editar Categoria" textButton="Salvar" placeholderImg="Escolher Icone"/> 
        </div>
    )
}

export default EditarCategoria;

