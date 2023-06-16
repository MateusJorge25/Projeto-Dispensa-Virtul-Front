import { Link, useParams } from "react-router-dom";
import Container from "./Container";
import '../layout/Adicionar/Adicionar.css';
import btnVoltar from "../../img/Botão de voltar.png";
import btnsetaBaixo from "../../img/seta baixo.png";

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
                    <Link to={`/despensas/${id}`}><img src={btnVoltar} width={45}/></Link>
                    <h1>{tela}</h1>
                </div>
                <form onSubmit={handleForm}>
                <div className="ContainerInputAdicionar">
                    <input type="text" name="nome" className="InputAdicionar" placeholder={placeholderName}/>    
                </div>
                <div className="ContainerInputAdicionar">
                    <input type="text" name="img" className="InputAdicionar" placeholder={placeholderImg}/>
                    <span><img src={btnsetaBaixo} width={45}></img></span>
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