import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProdutoItem from "../../componentes/produtoItem/produtoItem";
import getItem from "../../utilidades/getItem";
import './listagem.css';
import Carregando from "../../componentes/carregando/carregando.jsx";
import Filtros from "../../componentes/filtros/filtros";

const imagensBanner = {
    'roupas': '/images/list/capa/capaClothing.jpg',
    'joalheria': '/images/list/capa/capaEarring.jpg',
    'relogios': '/images/list/capa/capaWatch.jpg', 
    'tenis': '/images/list/capa/capaShoes.jpg'
}

const nomes = {
    'relogios': ['mens-watches', 'womens-watches'],
    'roupas': ['womens-dresses', 'mens-shirts'],
    'joalheria': ['womens-jewellery', 'sunglasses'],
    'tenis': ['mens-shoes', 'womens-shoes']
}


async function getNome(nomes){
    let itens = [], resposta;

    for(const nome of nomes){
        resposta = await getItem(nome);
        itens = [...itens, ...resposta];
    }
    return itens;
}

function Listagem(){
    //HOOKS
    const parametros = useParams();
    const [produtos, setProdutos] = React.useState(null);
    const [filtro, setFiltro] = useState(null);
    const [resPesquisa, setResPesquisa] = useState(null);

    React.useEffect(() => {//Pegando o valor da api e guardando em produtos de acordo com useParams
        setProdutos(null);
        setFiltro(null);
        getNome(nomes[parametros.categoria]).then((resposta) => {
            setProdutos(resposta);
        })
    }, [parametros]);

    if(filtro != null && filtro == "caro"){
        produtos.sort((a, b) => {
            return b.price - a.price
        });
    } 
    if(filtro != null && filtro == "barato"){
        produtos.sort((a, b) => {
            return a.price - b.price
        });
    }

    function pesquisar(e){
        const valorInput = e.target.value;

        setResPesquisa(produtos.filter(produto => {
            if(produto.title.toLowerCase().includes(valorInput)){
                return produto;
            }
        }))
    }

    // RETURN
    return produtos != null ? (
        <main className="main_listagem">
            <div className="banner">
                <img src={imagensBanner[parametros.categoria]} alt="" />
                <div className="filtros"> 
                    <div>
                        <Filtros setFiltro={setFiltro} filtro={filtro}/>
                    </div>

                    <div className="barra_pesquisa">
                        <input onChange={pesquisar} type="search" placeholder="Pesquise o produto"/>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
            <div key={1} className="container_produto_listagem">
                {
                    resPesquisa == null ?
                    produtos.map((produto, i) => {
                        if(filtro != null && produto.category == filtro){
                            return <ProdutoItem key={i} dados = {produto} className="produto_item"/>
                        } else if(filtro != null && filtro == "caro"){
                            return <ProdutoItem key={i} dados = {produto} className="produto_item"/>
                        } else if(filtro != null && filtro == "barato"){
                            return <ProdutoItem key={i} dados = {produto} className="produto_item"/>
                        }else if(filtro == null ){
                            return <ProdutoItem key={i} dados = {produto} className="produto_item"/>
                        }
                    }) :
                    resPesquisa.map((produto, i)=>{
                        return <ProdutoItem key={i} dados = {produto} className="produto_item"/>
                    })
                }
            </div>
        </main>
    ) : <Carregando/>;
}

export default Listagem;