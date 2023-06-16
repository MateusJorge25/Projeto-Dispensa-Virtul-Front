import { Link, useParams } from "react-router-dom";
import Container from "../Container";
import '../../layout/Adicionar/Adicionar.css';
import btnVoltar from "../../../img/Botão de voltar.png";
import CaixaDeLeite from "../../../img/caixaDeLeite.png";
import CaideDeSucoDeLaranja from "../../../img/CaixaDeSucoDeLaranja.png";
import PoteDeYogurt from "../../../img/PoteDeYogurt.png";

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
                        <select className="SelectInput" name="img" required>
                            <option value="" disabled selected> Escolha um icone</option>
                            <option value="Bebidas">Bebidas</option>
                            <option value="Frios">Frios</option>
                        </select>
                        {/* <input type="text"  className="InputAdicionar" placeholder={placeholderImg}/> */}
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