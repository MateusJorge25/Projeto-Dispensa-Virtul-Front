import { Link, useParams } from "react-router-dom";
import Container from "./Container";
import './AdicionarProdutos.css';
import btnVoltar from "../../img/Botão de voltar.png";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";


const EditarProduto = ({tela, textButton}) =>{

    const { id } = useParams();
    const [Data, setData] = useState(null);
    const [startDate, setStartDate] = useState(null);
    

    useEffect(() => {
        const getInfo = async (id) =>{
            const resApi = await fetch(`http://localhost:3000/produtos/describe/${id}`,{
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization":sessionStorage.getItem("token")
                }
            })
            const resApiJson = await resApi.json();
            console.log(resApiJson);
            setData(resApiJson);

            const datadb = resApiJson[0].dataDeValidade.slice(0,10);
            const dateObj = new Date(datadb);
            const adjustedDate = new Date(dateObj.getTime() + dateObj.getTimezoneOffset() * 60000);
            setStartDate(adjustedDate);
        };
        getInfo(id);
    },[1]);
    const sendApi = async(data, id) =>{

        await fetch(`http://localhost:3000/produtos/update/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
                "Authorization":sessionStorage.getItem("token"),
            },
            body: JSON.stringify(data),
        });
        window.location.href = `/produto/info/${id}`;
    };

    const handleForm = (event) =>{
        event.preventDefault();

        let formData =  new FormData(event.target);
        let data = {};

        for(let pair of formData.entries()){
            data[pair[0]] = pair[1];
        }
        sendApi(data, id);
    };

    const handleChange = (date) => {
        if (date instanceof Date && !isNaN(date))
            setStartDate(date)
    };

    const handlequantidade = (event) => {
        const novovalor = event.target.value;
        const index = 0;
        const newarray = [...Data];
        newarray[index] = {...newarray[index], quantidade: novovalor};
        setData(newarray);
    };
    
    const handleNome = (event) => {
        const novovalor = event.target.value;
        const index = 0;
        const newarray = [...Data];
        newarray[index] = {...newarray[index], NomeProduto: novovalor};
        setData(newarray);
    };
    
    const handleLote = (event) => {
        const novovalor = event.target.value;
        const index = 0;
        const newarray = [...Data];
        newarray[index] = {...newarray[index], LoteProduto: novovalor};
        setData(newarray);
    };
    
    const handleMarca = (event) => {
        const novovalor = event.target.value;
        const index = 0;
        const newarray = [...Data];
        newarray[index] = {...newarray[index], MarcaProduto: novovalor};
        setData(newarray);
    };
    
    const handleUnidade = (event) => {
        const novovalor = event.target.value;
        const index = 0;
        const newarray = [...Data];
        newarray[index] = {...newarray[index], UnidadeProduto: novovalor};
        setData(newarray);
    };
    
    const handleImgProduto = (event) => {
        const novovalor = event.target.value;
        const index = 0;
        const newarray = [...Data];
        newarray[index] = {...newarray[index], ImgProduto: novovalor};
        setData(newarray);
    };
    
    const handleLocal = (event) => {
        const novovalor = event.target.value;
        const index = 0;
        const newarray = [...Data];
        newarray[index] = {...newarray[index], local_id: novovalor};
        setData(newarray);
    };
        
    const handleCategoria = (event) => {
        const novovalor = event.target.value;
        const index = 0;
        const newarray = [...Data];
        newarray[index] = {...newarray[index], categoria_id: novovalor};
        setData(newarray);
    };

    
    // const AdicionarContador = ()=>{
    //     setContador(Contador+1);
    // }
    
    // const RemoverContador = ()=>{
    //     if(Contador>0)
    //         setContador(Contador-1);
    //     else
    //         setContador(Contador);
    // }


    if(Data === null){
        return <div>Carregando</div>
        // Data[0].dataDeValidade.slice(0,10)
    }

    return(

        <div className="adicionar" >
        
            

            <Container containerMod="telaAdicionar">
                <div className="Barravoltar">
                    <Link to={`/produto/info/${id}`}><img src={btnVoltar} width={45} alt="BotãoVoltar"/></Link>    
                    <h1>{tela}</h1>
                </div>
                <form onSubmit={handleForm}>
                <div className="ContainerInputAdicionar">
                    <input type="text" name="nome" className="InputAdicionarProdutos" required value={Data[0].NomeProduto} onChange={(e)=> {handleNome(e)}} placeholder="Nome"/>
                </div>

                <div className="ContainerInputAdicionar">
                    <input type="text" name="lote" className="InputAdicionarProdutos" value={Data[0].LoteProduto} onChange={(e)=> {handleLote(e)}} placeholder="Lote"/>
                    {/* <span className="imgCampos"><img src={caixa} width={45} alt="caixa"></img></span>    */}
                </div>
                
                <div className="ContainerInputAdicionar">
                    <input type="text" className="InputAdicionarProdutos" placeholder="Quantidade" disabled />
                    {/* <span className="imgCampos"><img src={setaCima} width={45} alt="SetaCima"></img></span> */}
                    <div className="containerButtonsContadores">
                    <button type="button" className="menos">-</button>
                        <input type="text" className="contador" name="quantidade" required value={Data[0].quantidade} onChange={(e)=> {handlequantidade(e)}} /> 
                        <button type="button" className="mais">+</button> 
                    </div>
                </div>

                <div className="ContainerInputAdicionar">
                    {/* <span className="imgCampos"><img src={armario} width={45} alt="armario"></img></span> */}
                    <input type="text" name="marca" className="InputAdicionarProdutos" value={Data[0].MarcaProduto} onChange={(e)=> {handleMarca(e)}} placeholder="Marca"/>
                </div>

                <div className="ContainerInputAdicionar">
                    <input type="text" name="unidade" className="InputAdicionarProdutos" value={Data[0].UnidadeProduto} onChange={(e)=> {handleUnidade(e)}} placeholder="Unidade(s)"/>
                    {/* <span className="imgCampos"><img src={balança} width={45} alt="balança"></img></span> */}
                </div>

                <div className="ContainerInputAdicionar">
                <DatePicker required name="dataDeValidade" className="InputAdicionarProdutos" selected={startDate} onKeyDown={(e) => e.preventDefault()} onChange={(date) => {handleChange(date)}} dateFormat="yyyy-MM-dd" placeholderText="YYYY-MM-DD"/>
                    {/* <input type="text" name="dataDeValidade" className="InputAdicionarProdutos" required value={Data[0].dataDeValidade.slice(0,10)} onChange={(e)=> {handleValidade(e)}} placeholder="Data Validade"/> */}
                    {/* <span className="imgCampos"><img src={calendario} width={45} alt="calendario"></img></span> */}
                </div>

                <div className="ContainerInputAdicionar">
                    <input type="text" name="local_id" className="InputAdicionarProdutos" required value={Data[0].local_id} onChange={(e)=> {handleLocal(e)}} placeholder="Despensa"/>
                    {/* <span className="imgCampos"><img src={despesas} width={45} alt="despensas"></img></span> */}
                </div>


                <div className="ContainerInputAdicionar">
                    <input type="text" name="categoria_id" className="InputAdicionarProdutos" required value={Data[0].categoria_id} onChange={(e)=> {handleCategoria(e)}} placeholder="Bebidas" />
                    {/* <span className="imgCampos"><img src={bebidas} width={45} alt="bebidas"></img></span>  */}
                </div> 

                <div className="ContainerInputAdicionar">
                    <input type="text" name="ImgProduto" className="InputAdicionarProdutos" value={Data[0].ImgProduto} onChange={(e)=> {handleImgProduto(e)}} placeholder="Imagem" />
                    {/* <span className="imgCampos"><img src={bebidas} width={45} alt="bebidas"></img></span>  */}
                </div> 

                
                <div className="BtnsAdicionar">
                    <Link to={`/produtos/${Data[0].user_id}`} className="BtnCancelar">Cancelar</Link>
                    <button type='submit' className="BtnAdicionar">{textButton}</button>
                </div>
                </form>
            </Container>
        </div>
    )   
}

export default EditarProduto;