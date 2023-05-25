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
// import iconStatusOff from "";

const CardsCategorias = ({img ,nome, idCategoria, idUser}) => {

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

    const handleDeleteCategoria = async(e, idCategoria, idUser) => {
        e.preventDefault();
        try{
            const respondeDelete = await fetch(`http://localhost:3000/categorias/delete/${idCategoria}`,{
                method:"DELETE",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": sessionStorage.getItem("token"),
                }
            });
            
            window.location.href = `/categorias/${idUser}`;
            // console.log(respondeDelete)
            return respondeDelete;
        }catch(error){
            console.log(error);
        }
    }

    const handleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };
    
    

    return (
        <div className="ContainerDespesas">
            <div className="containerbtncartDespensa">
                <button onClick={handleMenu} className="btnTresOpt"><img src={tresPontinho} width={30}/></button>
                    {isMenuVisible &&(
                        <ul className="ulDespensa">
                            <li><Link to={`/categoria/editar/${idCategoria}`} className="LinkEditDespensa"><img src={iconEditar} width={20}/>Editar</Link></li>
                            <li><button className="btnDelDespensa" onClick={(e) => {handleDeleteCategoria(e, idCategoria, idUser)}}><img src={iconDeletar} width={20}/>Excluir</button></li>
                        </ul>
                    )}
            </div>
            <div className="nomeImagemDespensa">
                <img className="imagemDoCardCategoria" src={img} width={70} />
                <h1 className="nomeCategoria">{nome}</h1> 
            </div>
        </div>
    )
}

export default CardsCategorias;