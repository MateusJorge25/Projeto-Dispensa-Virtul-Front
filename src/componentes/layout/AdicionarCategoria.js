import { Link, useParams } from "react-router-dom";
import Container from "./Container";
import './Adicionar.css';
import btnVoltar from "../../img/Botão de voltar.png";
import btnsetaBaixo from "../../img/seta baixo.png";

const AdicionarCategoria = ({tela, placeholderName, textButton, placeholderImg}) =>{

    const {id} = useParams();

    const sendApi = async(data, id) =>{

        const api = await fetch(`http://localhost:3000/categorias/create/${id}`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization":sessionStorage.getItem("token"),
            },
            body: JSON.stringify(data),
        })

        const apijson = await api.json();
        // console.log(apijson);
        window.location.href = `/categorias/${id}`;
        return apijson;
    }



    const handleForm = (event) =>{
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
                    <Link to={`/categorias/${id}`}><img src={btnVoltar} width={45}/></Link>
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
                    <Link to={`/categorias/${id}`} className="BtnCancelar">Cancelar</Link>
                    <button type='submit' className="BtnAdicionar">{textButton}</button>
                </div>
                </form>
            </Container>
        </div>
    )   
}

export default AdicionarCategoria;