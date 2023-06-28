import "../layout/CardDespensa.css";
import tresPontinho from "../../img/tresPontinhos.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import iconEditar from "../../img/IconEditar.png";
import iconDeletar from "../../img/IconDeletar.png";
import Bebidas from "../../img/Bebidas.png";
import Frios from "../../img/Frios.png"

const CardsCategorias = ({img ,nome, idCategoria, idUser}) => {

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    let imagem;
    switch (img) {
        case "Frios": imagem = Frios;
        break;
        case "Bebidas": imagem = Bebidas;
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
             <div className="containerbtnMenu">
                <button onClick={handleMenu} className="btnTresOpt"><img src={tresPontinho} alt="Opções da Categoria" width={30}/></button>
            </div>
            <div className="containerbtncartDespensa">
                    {isMenuVisible &&(
                        <ul className="ulDespensa">
                            <li className="liMenuUser"><Link to={`/categoria/editar/${idCategoria}`} className="LinkEditDespensa"><img src={iconEditar} alt="Imagem Editar" width={20}/>Editar</Link></li>
                            <li className="liMenuUser"><button className="btnDelDespensa" onClick={(e) => {handleDeleteCategoria(e, idCategoria, idUser)}}><img src={iconDeletar} alt="Imagem Excluir" width={20}/>Excluir</button></li>
                        </ul>
                    )}
            </div>
            <div className="nomeImagemDespensa">
                <img className="imagemDoCardCategoria" src={imagem} alt="Imagem Categoria" width={70} />
                <h1 className="nomeCategoria">{nome}</h1> 
            </div>
        </div>
    )
}

export default CardsCategorias;