import Navbar from "../../layout/NavBar/NavBar";
import EditCategoria from "../../layout/EditCategoria";
import "./EditarCategoria.css";

const EditarCategoria = () => {

    return (
        <div className="ContainerEditarCategoria">
                <Navbar />
                <EditCategoria placeholderImg="Escolher Icone" placeholderName="Nome Categoria" tela="Editar Categoria" textButton= "Adicionar"/>
        </div>
    )
}

export default EditarCategoria;

