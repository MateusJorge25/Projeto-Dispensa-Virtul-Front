import "../layout/CardDespensa.css";
import Lavanderia from "../../img/MaquinaDeLavar.png";
import ArmarioCozinha from "../../img/Armario de cozinha.png";
import Prateleira from "../../img/Prateleira.png";
import Geladeira from "../../img/Geladeira.png";
import TodosOsProdutos from "../../img/Todos os Produtos.png";
import tresPontinho from "../../img/tresPontinhos.png";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import iconEditar from "../../img/IconEditar.png";
import iconDeletar from "../../img/IconDeletar.png";
import iconStatusOn from "../../img/IconStatus.png";
import iconStatusOff from "../../img/iconStatusoff.png";

const CardsDespesas = ({img ,nomeProduto,idDespensa, idUser, status}) => {

    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const {id} = useParams();

    let imagem;
    switch (img) {
        case "MaquinaDeLavar": imagem = Lavanderia;
        break;
        case "ArmarioDeCozinha": imagem = ArmarioCozinha;
        break;
        case "Prateleira": imagem = Prateleira;
        break;
        case "Geladeira": imagem = Geladeira;
        break;
        case "TodosOsProdutos": imagem = TodosOsProdutos;
        break;
        default:
            break;
    }

    const handleAltStatus = async(e, idDespensa, idUser) => {
        e.preventDefault();
        try{
            const responseStatus = await fetch(`http://localhost:3000/local/update/status/${idDespensa}`,{
                method:"PUT",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": sessionStorage.getItem("token"),
                }
            })
            window.location.href = `/despensas/${idUser}`;
            return responseStatus;
        }catch(error){
            console.log(error);
        }
    }

    const handleDeleteDespensa = async(e, idDespensa, idUser) => {
        e.preventDefault();
        try{
            const respondeDelete = await fetch(`http://localhost:3000/local/delete/${idDespensa}`,{
                method:"DELETE",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": sessionStorage.getItem("token"),
                }
            });
            
            window.location.href = `/despensas/${idUser}`;
            // console.log(respondeDelete)
            return respondeDelete;
        }catch(error){
            console.log(error);
        }
    }

    const handleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };
    let imgstatus;
    if(status == 1){
        imgstatus = iconStatusOn;
    }else{
        imgstatus = iconStatusOff;
    }
    

    return (
        <div className="ContainerDespesas">
            <div className="containerbtncartDespensa">
                <button onClick={handleMenu} className="btnTresOpt"><img src={tresPontinho} width={30}/></button>
                    {isMenuVisible &&(
                        <ul className="ulDespensa">
                            <li><button className="btnAltStatus" onClick={(e) => {handleAltStatus(e,idDespensa,idUser)}}><img src={imgstatus} width={20}/>Status</button></li>
                            <li><Link to={`/despensa/editar/${idDespensa}`} className="LinkEditDespensa"><img src={iconEditar} width={20}/>Editar</Link></li>
                            <li><button className="btnDelDespensa" onClick={(e) => {handleDeleteDespensa(e, idDespensa, idUser)}}><img src={iconDeletar} width={20}/>Excluir</button></li>
                        </ul>
                    )}
            </div>
            <div className="nomeImagemDespensa">
                <img className="imagemDoCardCategoria" src={imagem} width={70} />
                <p className="nomeCategoria">{nomeProduto}</p> 
            </div>
        </div>
    )
}

export default CardsDespesas;