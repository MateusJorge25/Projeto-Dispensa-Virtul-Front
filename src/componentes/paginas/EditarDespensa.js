import Navbar from "../layout/NavBar";
import Adicionar from "../layout/Adicionar";
import "../paginas/AdicionarCategoria.css";

const EditarDespensa = ({props}) => {

    return (
        <div className="ContainerEditardespensa">
                <Navbar />
                <Adicionar placeholder="Nome Despensa"  tela=" Editar Despensa" textButton="Salvar"/> 
        </div>
    )
}

export default EditarDespensa;