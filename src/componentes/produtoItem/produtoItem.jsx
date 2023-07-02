import React from "react";
import { Link } from "react-router-dom";
import './produtoItem.css';

function ProdutoItem({dados}){
    let url = `produtos/search?idPrimario=${dados.id}`

    if(dados.shoesID !== undefined){
        url += `&idSecundario=${dados.shoesID}&p=shoes`;
    } else{
        url += `&idSecundario=${dados.fakestoreID}`
    }
    //url += `produtos/search?idPrimario=${dados.id}&idSecundario=${dados.fakeStoreID !== "undefined" ? dados.fakestoreID : 'none'}`

    return(
        <div className="container_produto_item">
            <picture className="container_img">
                <img src={dados.images[0]} alt="" />    
                <span className="preco">R$ {dados.price}</span>
            </picture>
            <div className="info_produto">
                <p className='nome_produto'>{dados.title}</p>
                <p className='marca_categoria'>{dados.brand}</p>
            </div>
            <Link to={`/produtos/${dados.category}/${url}`} className="detalhes_produto">Ver detalhes</Link>
        </div>
    );
}

export default ProdutoItem;