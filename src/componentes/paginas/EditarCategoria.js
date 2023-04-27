import Navbar from "../layout/NavBar";
import Adicionar from "../layout/Adicionar";
import "../paginas/AdicionarCategoria.css";

const EditarCategoria = () => {

    return (
        <div className="ContainerEditarCategoria">
                <Navbar />
                <Adicionar placeholder="Nome Categoria"  tela={"Categoria"}/> 
        </div>
    )
}

export default EditarCategoria;