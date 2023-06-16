import Navbar from "../../layout/NavBar/NavBar";
import EditarDespe from "../../layout/EditarDespensaComponent";
import "./EditarDespensas.css";


const EditarDespensas = () => {

    
    return (
        <div className="ContainerEditardespensa">
                <Navbar />
                <EditarDespe placeholderName="Nome Despensa"  tela=" Editar Despensa" textButton="Salvar" placeholderImg="Escolher Icone"/> 
                
        </div>
    )
}

export default EditarDespensas;