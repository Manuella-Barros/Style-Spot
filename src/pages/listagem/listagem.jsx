import React from "react";
import { useParams } from "react-router-dom";
import ProdutoItem from "../../componentes/produtoItem/produtoItem";
import getItem from "../../utilidades/getItem";
import './listagem.css';
import Carregando from "../../componentes/carregando/carregando.jsx";

const imagensBanner = {
    'womens-dresses': '/images/list/capa/capaClothing.jpg',
    'womens-jewellery': '/images/list/capa/capaEarring.jpg',
    'mens-watches': '/images/list/capa/capaWatch.jpg', 
    'mens-shoes': '/images/list/capa/capaShoes.jpg'
}

function Listagem(){
    const parametros = useParams();
    const [produtos, setProdutos] = React.useState(null)

    React.useEffect(()=>{ 
        setProdutos(null);
        getItem(parametros.categoria, 5).then((resposta) => {

            setProdutos(resposta);
        })
    }, [parametros]);

    return produtos != null ? (
        <main className="main_listagem">
            <div className="banner">
                <img src={imagensBanner[produtos[0].category]} alt="" />
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
    ) : <Carregando/>;
}

export default Listagem;