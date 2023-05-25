import Navbar from "../../layout/NavBar";
import AdicionarCategoria from "../../layout/AdicionarCategoria";
import "./AdicionarCategoria.css";

const AdiciCategoria = () =>{

    return (
        <div className="ContainerAdicionarCategoria">
                <Navbar />
                <AdicionarCategoria placeholderImg="Escolher Icone" placeholderName="Nome Categoria" tela="Cadastrar Categoria" textButton= "Adicionar"/>
        </div>
    )
}

export default AdiciCategoria;