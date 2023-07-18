import React from "react";
import ProdutoItem from "../../componentes/produtoItem/produtoItem";
import './resumoCategoria.css'; 
import getItem from "../../utilidades/getItem";
import { Link } from "react-router-dom";
import '../carregando/carregando'
import Carregando from "../carregando/carregando";

const categorias = {// categoria = Nome, url
    "womens-dresses": ["Roupas Femininas","roupas"], 
    "mens-shirts": ["Roupas Femininas","roupas"], 
    "womens-jewellery": ["Joias Femininas", "joalheria"], 
    "mens-watches": ["Relógios", "relogios"],
    "womens-watches": ["Relógios", "relogios"],
    "mens-shoes": ["Sapatos", "tenis"],
    "womens-shoes": ["Sapatos", "tenis"]
}

function ResumoCategorias({categoria}){ //categoria = womans-dresses
    const [produtos, setProdutos] = React.useState(null)

    React.useEffect(()=>{
        getItem(categoria).then((resposta) => {
            setProdutos(resposta)
        })
    }, []);
   
    return produtos !== null ?(
        <div className="resumo_categorias">
            <div className="container_titulo">
                <h2>{categorias[categoria][0]}</h2>                
            </div>

            <section className="container_produto_resumo">
                {produtos.map((produto, i) => {
                    return <ProdutoItem key={i} dados={produto} className="produto_item"/>
                })}          
            </section>
            
            <div className="ver_mais">
                <Link to = {`/produtos/${categorias[categoria][1]}`} >Ver mais</Link>
            </div>
        </div>
    ) : <Carregando/>;
}

export default ResumoCategorias;