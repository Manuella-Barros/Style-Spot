import React from "react";
import { Link } from "react-router-dom"; // plugging

function CategoriaItem({valores}){ // aqui ta passando os valores das categorias

    console.log(valores.categoria);
    return (
        <div className="container_categoria_item">
            <div className="container_imagem">
                <img src={valores.imagem} alt="" />
            </div>
            <div className="item_info">
                <p>{valores.categoria}</p>
                <Link to={valores.caminho}>Ver mais</Link>                
            </div>
        </div>
        
    );
}

export default CategoriaItem;