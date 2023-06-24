import { Link, useParams } from "react-router-dom";
import Container from "./Container";
import '../layout/Adicionar/Adicionar.css';
import btnVoltar from "../../img/Botão de voltar.png";

const AdicionarDespensa = ({tela, placeholderName, textButton, placeholderImg}) =>{

    const {id} = useParams();

    const sendApi = async (data,id) => {
        await fetch(`http://localhost:3000/local/create/${id}`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization":sessionStorage.getItem("token"),
            },
            body: JSON.stringify(data),
        })
        window.location.href = `/Despensas/${id}`;
    }


    const handleForm = (event) => {
        event.preventDefault();

        let formData =  new FormData(event.target);
        let data = {};

        for(let pair of formData.entries()){
            data[pair[0]] = pair[1];
        }

        sendApi(data, id);
    }

    return(
        <div className="adicionar" >
            <Container containerMod="telaAdicionar">
                <div className="Barravoltar">
                    <Link to={`/despensas/${id}`}><img src={btnVoltar} alt="Imagem Voltar" width={45}/></Link>
                    <h1>{tela}</h1>
                </div>
                <form onSubmit={handleForm}>
                <div className="ContainerInputAdicionar">
                    <input type="text" name="nome" className="InputAdicionar" placeholder={placeholderName}/>    
                </div>
                <div className="ContainerInputAdicionar">
                    <select name="img" className="SelectInput" required>
                        <option value="" disabled selected>Selecionar um icone</option>
                        <option value="MaquinaDeLavar">Maquina De Lavar</option>
                        <option value="ArmarioDeCozinha">Armario De Cozinha</option>
                        <option value="Prateleira">Prateleira</option>
                        <option value="Geladeira">Geladeira</option>
                        <option value="TodosOsProdutos">Todos Os Produtos</option>
                    </select>
                </div>

                <div className="BtnsAdicionar">
                    <Link to={`/despensas/${id}`} className="BtnCancelar">Cancelar</Link>
                    <button type="submit" className="BtnAdicionar">{textButton}</button>
                </div>
                </form>
            </Container>
        </div>
    )   
}

export default AdicionarDespensa;