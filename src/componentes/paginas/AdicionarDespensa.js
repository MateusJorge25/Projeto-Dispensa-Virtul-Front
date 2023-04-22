import Navbar from "../layout/NavBar";
import Adicionar from "../layout/Adicionar";
import "../paginas/AdicionarCategoria.css";

const AdicionarDespensa = () =>{

    return (
        <div className="ContainerAdicionarCategoria">
                <Navbar />
                <Adicionar placeholder="Adicionar Despensa" tela="Despensa"/>
        </div>
    )
}

export default AdicionarDespensa;