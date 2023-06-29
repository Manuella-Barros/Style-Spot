import React from "react";
import { useParams } from "react-router-dom";
import ProdutoItem from "../../componentes/produtoItem/produtoItem";
import getItem from "../../utilidades/getItem";
import './listagem.css';

function Listagem(){
    const parametros = useParams(); // Perguntar de onde eu to pegando isso e como
    const [produtos, setProdutos] = React.useState(null)

    React.useEffect(()=>{ getItem(parametros.categoria, 5).then((resposta) => {
            setProdutos(resposta)
        })
    }, []);

    return produtos != null ? (
        <main className="main_listagem">
            <div className="banner">
                <img src="../../images/placeholder.jpeg" alt="" />
                <div className="filtros">
                    <p>Filtro 1</p>
                    <p>Filtro 2</p>
                    <p>Filtro 3</p>
                    <p>Filtro 4</p>
                </div>
            </div>
            <div className="container_produto_listagem">
                {
                    produtos.map((produto, i) => {
                        return <ProdutoItem key={i} dados = {produto} className="produto_item"/>
                    })
                }
            </div>
        </main>
    ) : "Não tem nd aqui"
}

export default Listagem;