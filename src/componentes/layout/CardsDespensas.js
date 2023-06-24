import "../layout/CardDespensa.css";
import Lavanderia from "../../img/MaquinaDeLavar.png";
import ArmarioCozinha from "../../img/Armario de cozinha.png";
import Prateleira from "../../img/Prateleira.png";
import Geladeira from "../../img/Geladeira.png";
import TodosOsProdutos from "../../img/Todos os Produtos.png";
import tresPontinho from "../../img/tresPontinhos.png";
import { useState } from "react";
import { Link,} from "react-router-dom";
import iconEditar from "../../img/IconEditar.png";
import iconDeletar from "../../img/IconDeletar.png";
import iconStatusOn from "../../img/IconStatus.png";
import iconStatusOff from "../../img/iconStatusoff.png";

const CardsDespesas = ({img ,nomeProduto,idDespensa, idUser, status}) => {

    const [isMenuVisible, setIsMenuVisible] = useState(false);

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
        default: imagem = "";
        break;
    }

    const handleAltStatus = async(e, idDespensa) => {
        e.preventDefault();
        try{
            const responseStatus = await fetch(`http://localhost:3000/local/update/status/${idDespensa}`,{
                method:"PUT",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": sessionStorage.getItem("token"),
                }
            })
            return responseStatus;
        }catch(error){
            console.log(error);
        }
    }

    const handleDeleteDespensa = async(e, idDespensa) => {
        e.preventDefault();
        try{
            const respondeDelete = await fetch(`http://localhost:3000/local/delete/${idDespensa}`,{
                method:"DELETE",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": sessionStorage.getItem("token"),
                }
            });
            return respondeDelete;
        }catch(error){
            console.log(error);
        }
    }

    const handleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };
    let imgstatus;
    if(status === 1){
        imgstatus = iconStatusOn;
    }else{
        imgstatus = iconStatusOff;
    }
    

    return (
        <div className="ContainerDespesas">
            <div className="containerbtnMenu">
                <button onClick={handleMenu} className="btnTresOpt"><img src={tresPontinho} alt="Opções Categoria" width={30}/></button>
            </div>
            <div className="nomeImagemDespensa">
                <img className="imagemDoCardCategoria" src={imagem} alt="Imagem Categoria" width={70} />
                <p className="nomeCategoria">{nomeProduto}</p> 
            </div>
            <div className="containerbtncartDespensa">
                    {isMenuVisible &&(
                        <ul className="ulDespensa">
                            <li className="itemsMenu"><button className="btnAltStatus" onClick={(e) => {handleAltStatus(e,idDespensa)}}><img src={imgstatus} alt="Status" width={20}/>Status</button></li>
                            <li className="itemsMenu"><Link to={`/despensa/editar/${idDespensa}`} className="LinkEditDespensa"><img src={iconEditar} width={20} alt="Editar Categoria" />Editar</Link></li>
                            <li className="itemsMenu"><button className="btnDelDespensa" onClick={(e) => {handleDeleteDespensa(e, idDespensa)}}><img src={iconDeletar} width={20} alt="Excluir Categoria"/>Excluir</button></li>
                        </ul>
                    )}
            </div>
        </div>
    )
}

export default CardsDespesas;