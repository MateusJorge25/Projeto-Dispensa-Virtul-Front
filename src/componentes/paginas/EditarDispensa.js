import Navbar from "../layout/NavBar";
import Adicionar from "../layout/Adicionar";
import "../paginas/AdicionarCategoria.css";

const EditarDispensa = ({props}) => {

    return (
        <div className="ContainerEditardispensa">
                <Navbar />
                <Adicionar placeholder="Nome Dispensa"  tela=" Editar Dispensa" textButton="Salvar"/> 
        </div>
    )
}

export default EditarDispensa;