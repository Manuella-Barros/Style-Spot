import React from "react";
import ProdutoItem from "../../componentes/produtoItem/produtoItem";
import './resumoCategoria.css'; 
import getItem from "../../utilidades/getItem";
import { Link } from "react-router-dom";

const categorias = [
    "Roupas Femininas", "Joias Femininas", "Relógios", "Sapatos"
]

function ResumoCategorias({categoria}){
    const [produtos, setProdutos] = React.useState(null)

    React.useEffect(()=>{
        getItem(categoria)
        .then((resposta) => {
            setProdutos(resposta)
        })
    }, []);

    let categoriaPTBR;
    switch(categoria){
        case "womens-dresses":
            categoriaPTBR = "Roupas Femininas";
            break
        case "womens-jewellery":
            categoriaPTBR = "Joias Femininas";
            break
        case "mens-watches":
            categoriaPTBR = "Relógios";
            break
        case "mens-shoes":
            categoriaPTBR = "Sapatos";
            break
    }

    return produtos !== null ?(
        <div className="resumo_categorias">
            <div className="container_titulo">
                <h2>{categoriaPTBR}</h2>                
            </div>

            <section className="container_produto">
                {produtos.map((produto) => {
                    return <ProdutoItem dados={produto}/>
                })}          
            </section>
            <Link to = {`/produtos/${categoria}`}>Ver mais</Link>
        </div>
    ) : 'cade os produtossss'
}

export default ResumoCategorias;