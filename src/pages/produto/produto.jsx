import { Link, useLocation, useParams } from "react-router-dom";
import ResumoCategorias from "../../componentes/resumoCategoria/resumoCategoria";
import './produto.css'
import getID from "../../utilidades/getID";
import React, { useState } from "react";
import Carregando from "../../componentes/carregando/carregando";

function Produto(){
    const parametro = useParams();
    const URLInfo = useLocation();
    const search = new URLSearchParams(URLInfo.search) // transforma em um objeto manipulável

    const [produto1, setProduto1] = useState(null);

    React.useEffect(() => {
        setProduto1(null);
        getID(search, parametro.categoria).then((resposta) => {
            setProduto1(resposta)
        })
    }, [parametro]);

    return produto1 !== null ? (
        <main id="main_produto">
            <article id="article_produto">
                <picture>
                    <img src={produto1.images[0]} alt="" />
                </picture>
                <section>
                    <h1>{produto1.title}</h1>
                    <p>{produto1.description}</p>
                    <div>
                        <p>{produto1.brand}</p>
                        <p>{produto1.category}</p>
                        <p id="preco">R${produto1.price}</p>
                    </div>
                    <Link>Comprar</Link>
                </section>
            </article>
            <article>
                <ResumoCategorias categoria={parametro.categoria}/>
            </article>
        </main>
    ) : <Carregando/>;
}

export default Produto;