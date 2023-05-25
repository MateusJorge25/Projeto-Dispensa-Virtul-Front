import { Link, useParams } from "react-router-dom";
import Container from "./Container";
import './Adicionar.css';
import btnVoltar from "../../img/Botão de voltar.png";
import btnsetaBaixo from "../../img/seta baixo.png";
import { useEffect, useState } from "react";

const EditCategoria = ({tela, placeholderName, textButton, placeholderImg}) =>{

    const {id} = useParams();
    const [Data, setData] = useState(null)

    useEffect(()=>{
        const getInfo = async (id) =>{
            const resApi = await fetch(`http://localhost:3000/categorias/describe/${id}`,{
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization":sessionStorage.getItem("token")
                },
            });
            const resApiJson = await resApi.json();
            setData(resApiJson);
            console.log(resApiJson);
            return resApiJson;
        };
        getInfo(id);
    },[1])



    const sendApi = async(data, id) =>{

        const api = await fetch(`http://localhost:3000/categorias/update/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
                "Authorization":sessionStorage.getItem("token"),
            },
            body: JSON.stringify(data),
        })

        const apijson = await api.json();
        // console.log(apijson);
        window.location.href = `/categorias/${Data[0].user_id}`;
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

    const handleNome = (event) =>{
        const novovalor = event.target.value;
        const index = 0;
        const newarray = [...Data];
        newarray[index] = {...newarray[index], nome: novovalor};
        setData(newarray);
    };
    const handleImg = (event) =>{
        const novovalor = event.target.value;
        const index = 0;
        const newarray = [...Data];
        newarray[index] = {...newarray[index], img: novovalor};
        setData(newarray);
    };
    if(Data === null){
        return <div className="AvisoCarregando">Carregando</div>
    }

    return(
        <div className="adicionar" >
            <Container containerMod="telaAdicionar">
                <div className="Barravoltar">
                    <Link to={`/categorias/${Data[0].user_id}`}><img src={btnVoltar} width={45}/></Link>
                    <h1>{tela}</h1>
                </div>
                <form onSubmit={handleForm}>
                <div className="ContainerInputAdicionar">
                    <input type="text" name="nome" className="InputAdicionar" required value={Data[0].nome} onChange={(e)=>{handleNome(e)}} placeholder={placeholderName}/>    
                </div>
                <div className="ContainerInputAdicionar">
                    <input type="text" name="img" className="InputAdicionar" required value={Data[0].img} onChange={(e)=>{handleImg(e)}} placeholder={placeholderImg}/>
                    <span><img src={btnsetaBaixo} width={45}></img></span>
                </div>

                <div className="BtnsAdicionar">
                    <Link to={`/categorias/${Data[0].user_id}`} className="BtnCancelar">Cancelar</Link>
                    <button type='submit' className="BtnAdicionar">{textButton}</button>
                </div>
                </form>
            </Container>
        </div>
    )   
}

export default EditCategoria;