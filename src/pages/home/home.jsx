import React from "react";
import CategoriaItem from "./categoriaItem";
import ProdutoItem from "../../componentes/produtoItem/produtoItem";
import ResumoCategorias from "../../componentes/resumoCategoria/resumoCategoria";
import './home.css';
import categorias from "../../utilidades/categorias.jsx";

function Home(){
    return(
        <main id="main_home">
            <article id="container_categoria">
                {
                    categorias.map((categoria, i) => { //categoria = valores  //i = index
                        return <CategoriaItem key = {i} valores = {categoria} />
                        //key = cada elemento precisa ter uma chave unida tipo id
                        //map é um for q roda cada elemento;
                        //estamos criando o atributo valores e o valor categorias para a função CategoriaItem
                    })
                }
            </article>
            <section>
                <ResumoCategorias categoria = {"womens-dresses"}/>
                <ResumoCategorias categoria = {"womens-jewellery"}/>
                <ResumoCategorias categoria = {"mens-watches"}/>
                <ResumoCategorias categoria = {"mens-shoes"}/>
            </section>
        </main>
    );
}

export default Home;