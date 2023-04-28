import Navbar from "../layout/NavBar";
import Adicionar from "../layout/Adicionar";
import "../paginas/AdicionarCategoria.css";

const AdicionarCategoria = () =>{

    return (
        <div className="ContainerAdicionarCategoria">
                <Navbar />
                <Adicionar placeholder="Adicionar Categoria" tela="Cadastrar Categoria" textButton= "Adicionar"/>
        </div>
    )
}

export default AdicionarCategoria;