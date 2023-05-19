import Navbar from "../../layout/NavBar";
import Adicionar from "../../layout/Adicionar";
import "./EditarDespensa.css";


const EditarDespensa = () => {

    return (
        <div className="ContainerEditardespensa">
                <Navbar />
                <Adicionar placeholderName="Nome Despensa"  tela=" Editar Despensa" textButton="Salvar" placeholderImg="Escolher Icone"/> 
                
        </div>
    )
}

export default EditarDespensa;