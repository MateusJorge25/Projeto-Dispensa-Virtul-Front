import Navbar from "../../layout/NavBar";
import Adicionar from "../../layout/Adicionar";
import "./AdicionarDespensa.css"

const AdicionarDespensa = () =>{

    return (
        <div className="ContainerAdicionarCategoria">
                <Navbar />
                <Adicionar placeholder="Adicionar Despensa" tela="Cadastrar Despensa" textButton="Adicionar"/>
        </div>
    )
}

export default AdicionarDespensa;