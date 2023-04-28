import Navbar from "../layout/NavBar";
import Adicionar from "../layout/Adicionar";
import "../paginas/AdicionarCategoria.css";

const EditarCategoria = () => {

    return (
        <div className="ContainerEditarCategoria">
                <Navbar />
                <Adicionar placeholder="Nome Categoria"  tela=" Editar Categoria" textButton="Salvar"/> 
        </div>
    )
}

export default EditarCategoria;

