import React from "react";
import ProdutoItem from "../../componentes/produtoItem/produtoItem";
import './resumoCategoria.css'; 
import getItem from "../../utilidades/getItem";
import { Link } from "react-router-dom";

const categorias = {
    "womens-dresses": "Roupas Femininas", 
    "womens-jewellery": "Joias Femininas", 
    "mens-watches": "Relógios",
    "mens-shoes": "Sapatos"
}

function ResumoCategorias({categoria}){ //categoria = womans-dresses
    const [produtos, setProdutos] = React.useState(null)

    React.useEffect(()=>{ getItem(categoria).then((resposta) => {
            setProdutos(resposta)
        })
    }, []);
   
    return produtos !== null ?(
        <div className="resumo_categorias">
            <div className="container_titulo">
                <h2>{categorias[categoria]}</h2>                
            </div>

            <section className="container_produto">
                {produtos.map((produto, i) => {
                    return <ProdutoItem key={i} dados={produto}/>
                })}          
            </section>
            <div className="ver_mais">
                <Link to = {`/produtos/${categoria}`} >Ver mais</Link>
            </div>
            
            
        </div>
    ) : 'Carregando produtos'
}

export default ResumoCategorias;