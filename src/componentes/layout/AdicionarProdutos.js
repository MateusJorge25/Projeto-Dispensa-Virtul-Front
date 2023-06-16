import { Link, useParams } from "react-router-dom";
import Container from "./Container";
import './AdicionarProdutos.css';
import btnVoltar from "../../img/Botão de voltar.png";
import caixa from "../../img/caixa.png";
import setaCima from "../../img/iconQuantidade.png";
import armario from "../../img/Prateleira.png";
import balança from "../../img/balança.png";
import calendario from "../../img/calendario.png";
import despesas from "../../img/despesas.png";
import bebidas from "../../img/Bebidas.png";
import { useState,useEffect } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const AdicionarProdutos = ({tela, textButton}) =>{

    const { id } = useParams();
    const [Contador, setContador] = useState(0);
    const [Categoria, setCategoria] = useState([]);
    const [Despensa, setDespensa] = useState([]);
    const [startDate, setStartDate] = useState(new Date());

    useEffect(()=>{

        const ApiFetchCategoria = async (id) =>{
            const ResponseApiCategoria = await fetch(`http://localhost:3000/categorias/${id}`,{
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": sessionStorage.getItem("token"),
                },
            })
            const ResApiJson = await ResponseApiCategoria.json();
            console.log(ResApiJson);
            setCategoria(ResApiJson);
        }

        const ApiFetchDespensa = async (id) =>{
            const ResponseApiDespensa = await fetch(`http://localhost:3000/local/despensaOn/${id}`,{
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": sessionStorage.getItem("token"),
                },
            })
            const ResApiJson = await ResponseApiDespensa.json();
            console.log(ResApiJson);
            setDespensa(ResApiJson);
        }
        ApiFetchDespensa(id);
        ApiFetchCategoria(id);
    },[])

    const sendApi = async(data, id) =>{

        const api = await fetch(`http://localhost:3000/produtos/create/${id}`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization":sessionStorage.getItem("token"),
            },
            body: JSON.stringify(data),
        })

        const apijson = await api.json();
        window.location.href = `/produtos/${id}`;
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

    const handleContador = (event) => {
        if(event.target.value > 100){
            setContador(100);
        }else if(event.target.value < 0){
            setContador(0);
        }else{
            setContador(event.target.value);
        }
    };

    const AdicionarContador = ()=>{
        setContador(Contador+1);
    }
    const RemoverContador = ()=>{
        if(Contador>0)
            setContador(Contador-1);
        else
            setContador(Contador);
    }

    const handleChange = (date) => {
        if (date instanceof Date && !isNaN(date)) {
            setStartDate(date)
        }
      };

    return(

        <div className="adicionar" >
        
            <Container containerMod="telaAdicionar">
                <div className="Barravoltar">
                    <Link to={`/produtos/${id}`}><img src={btnVoltar} width={45} alt="BotãoVoltar"/></Link>    
                    <h1>{tela}</h1>
                </div>
                <form onSubmit={handleForm}>
                <div className="ContainerInputAdicionar">
                    <input type="text" name="nome" className="InputAdicionarProdutos" required placeholder="Nome"/>
                </div>

                <div className="ContainerInputAdicionar">
                    <input type="text" name="lote" className="InputAdicionarProdutos" required placeholder="Lote"/>
                    {/* <span className="imgCampos"><img src={caixa} width={45} alt="caixa"></img></span>    */}
                </div>
                
                <div className="ContainerInputAdicionar">
                    <input type="text" className="InputAdicionarProdutos" placeholder="Quantidade" disabled />
                    {/* <span className="imgCampos"><img src={setaCima} width={45} alt="SetaCima"></img></span> */}
                    <div className="containerButtonsContadores">
                        <button onClick={RemoverContador} className="menos">-</button>
                        <input type="number" className="contador" name="quantidade" required value={Contador} onChange={(e)=> {handleContador(e)}} placeholder="0" /> 
                        <button onClick={AdicionarContador} className="mais">+</button> 
                    </div>
                </div>

                <div className="ContainerInputAdicionar">
                    {/* <span className="imgCampos"><img src={armario} width={45} alt="armario"></img></span> */}
                    <input type="text" name="marca" className="InputAdicionarProdutos" required placeholder="Marca"/>
                </div>

                <div className="ContainerInputAdicionar">
                    <input type="text" name="unidade" className="InputAdicionarProdutos" required placeholder="Unidade(s)"/>
                    {/* <span className="imgCampos"><img src={balança} width={45} alt="balança"></img></span> */}
                </div>

                <div className="ContainerInputAdicionar">
                    <DatePicker required name="dataDeValidade" className="InputAdicionarProdutos" selected={startDate} onKeyDown={(e) => e.preventDefault()} onChange={(date) => handleChange(date)} dateFormat="yyyy-MM-dd" placeholderText="YYYY-MM-DD"/>
                    {/* <input type="date" pattern="\d{4}/\d{1,2}/\d{1,2}" name="dataDeValidade" className="InputAdicionarProdutos" required placeholder="Data Validade"/> */}
                    {/* <span className="imgCampos"><img src={calendario} width={45} alt="calendario"></img></span> */}
                </div>

                <div className="ContainerInputAdicionar">
                <select type="text" name="local_id" className="SelectInput" required>
                      <option value="" disabled selected>Selecione uma Despensa</option> 
                      {
                        Despensa.map((element)=>{
                            return <option value={element.id}>{element.nome ?? element.message}</option>  
                        })
                      }
                </select>
                    {/* <span className="imgCampos"><img src={despesas} width={45} alt="despensas"></img></span> */}
                </div>


                <div className="ContainerInputAdicionar">
                    <select name="categoria_id" className="SelectInput" required>
                        <option value="" disabled selected>Selecione uma Categoria</option>  
                        {
                            Categoria.map((element)=>{
                                return <option value={element.id}>{element.nome ?? element.message}</option>  
                            })
                        }     
                    </select>
                    {/* <span className="imgCampos"><img src={bebidas} width={45} alt="bebidas"></img></span>  */}
                </div> 

                <div className="ContainerInputAdicionar">
                    <select name="ImgProduto" className="InputAdicionarProdutos">
                        <option value="" disabled selected>Selecione uma Imagem</option> 
                        <option value="Yogurt">Yogurt</option> 
                        <option value="Leite">Leite</option> 
                        <option value="SucoDeLaranja">Suco De Laranja</option> 
                    </select>
                    {/* <span className="imgCampos"><img src={bebidas} width={45} alt="bebidas"></img></span>  */}
                </div> 

                
                <div className="BtnsAdicionar">
                    <Link to={`/produtos/${id}`} className="BtnCancelar">Cancelar</Link>
                    <button type='submit' className="BtnAdicionar">{textButton}</button>
                </div>
                </form>
            </Container>
        </div>
    )   
}

export default AdicionarProdutos;