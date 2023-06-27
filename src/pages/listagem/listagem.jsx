import React from "react";
import { useParams } from "react-router-dom";
import ProdutoItem from "../../componentes/produtoItem/produtoItem";
import getItem from "../../utilidades/getItem";

function Listagem(){
    const parametros = useParams(); // como eu to pegando isso?
    const [produtos, setProdutos] = React.useState(null)

    React.useEffect(()=>{ getItem(parametros.categoria, 5).then((resposta) => {
            setProdutos(resposta)
        })
    }, []);

    return produtos != null ? (
        <main>
            <div>
                <img src="../../images/tenis.jpg" alt="" />
                <div>
                    <p>Filtro 1</p>
                    <p>Filtro 2</p>
                    <p>Filtro 3</p>
                    <p>Filtro 4</p>
                </div>
            </div>
            <div className="container_produto">
                {
                    produtos.map((produto, i) => {
                        return <ProdutoItem key={i} dados = {produto}/>
                    })
                }
            </div>
        </main>
    ) : "Não tem nd aqui"
}

export default Listagem;