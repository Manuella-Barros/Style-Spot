import React from "react";
import { Link } from "react-router-dom";
import './produtoItem.css';

function ProdutoItem(){
    return(
        <div className="container_produto_item">
            <picture className="container_img">
                <img src="./images/roupas.jpg" alt="" />    
                <span className="preco">R$ 100</span>            
            </picture>
            <div className="info_produto">
                <p className='nome_produto'>Nome do produto</p>
                <p className='marca_categoria'>Marca</p>
            </div>
            <Link className="detalhes_produto">Ver Detalhes</Link>            
        </div>
    );
}

export default ProdutoItem;