import { Link, useParams } from "react-router-dom";
import Container from "./Container";
import  "./Adicionar/Adicionar.css";
import btnVoltar from "../../img/Botão de voltar.png";
import btnsetaBaixo from "../../img/seta baixo.png";
import { useState,useEffect } from "react";

const EditarDespensaComponent = ({tela, placeholderName, textButton, placeholderImg}) =>{

    const {id} = useParams();
    const [Despensa, setDespensa] = useState(null);

    useEffect(() => {
        const getInfo = async (id) =>{
            const resApi = await fetch(`http://localhost:3000/local/describe/${id}`,{
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization":sessionStorage.getItem("token")
                }
            })
            const resApiJson = await resApi.json();
            setDespensa(resApiJson);
            return resApiJson;
        };
        getInfo(id);
    },[1]);
    const sendApi = async(data, id) =>{

        await fetch(`http://localhost:3000/local/update/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
                "Authorization":sessionStorage.getItem("token"),
            },
            body: JSON.stringify(data),
        });
        window.location.href = `/despensas/${Despensa[0].user_id}`;
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

    const handleNome = (event) =>{
        const novovalor = event.target.value;
        const index = 0;
        const newarray = [...Despensa];
        newarray[index] = {...newarray[index], nome: novovalor};
        setDespensa(newarray);
    };
    const handleImg = (event) =>{
        const novovalor = event.target.value;
        const index = 0;
        const newarray = [...Despensa];
        newarray[index] = {...newarray[index], img: novovalor};
        setDespensa(newarray);
    };
    if(Despensa === null){
        return <div className="AvisoCarregando">Carregando</div>
    }

    return(
        <div className="adicionar" >
            <Container containerMod="telaAdicionar">
                <form onSubmit={handleForm}>
                <div className="Barravoltar">
                    <Link to={`/despensas/${Despensa[0].user_id}`}><img src={btnVoltar} width={45}/></Link>
                    <h1>{tela}</h1>
                </div>
                <div className="ContainerInputAdicionar">
                    <input type="text" name="nome" className="InputAdicionar" value={Despensa[0].nome} onChange={(e) => {handleNome(e)}} placeholder={placeholderName}/>    
                </div>
                <div className="ContainerInputAdicionar">
                    <select className="SelectInput" name="img" required >
                        <option value={Despensa[0].img} disabled selected> {Despensa[0].img}</option>
                        <option value="MaquinaDeLavar">Maquina De Lavar</option>
                        <option value="ArmarioDeCozinha">Armario De Cozinha</option>
                        <option value="Prateleira">Prateleira</option>
                        <option value="Geladeira">Geladeira</option>
                        <option value="TodosOsProdutos">Pilha de Produtos</option>
                    </select>
                    {/* <input type="text" name="img" className="InputAdicionar" value={Despensa[0].img} onChange={(e)=>{handleImg(e)}} placeholder={placeholderImg}/> */}
                </div>

                <div className="BtnsAdicionar">
                    <Link to={`/despensas/${Despensa[0].user_id}`} className="BtnCancelar">Cancelar</Link>
                    <button type="submit" className="BtnAdicionar">{textButton}</button>
                </div>
                </form>
            </Container>
        </div>
    )   
}

export default EditarDespensaComponent;