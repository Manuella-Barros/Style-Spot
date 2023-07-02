// Componente são função retornaveis e tem o nome com letra maiuscula
// Componetes podem ser usadas como tags
import React from "react";
import { Link, Route } from "react-router-dom";
import './navbar.css';
import Listagem from "../../pages/listagem/listagem";

// reloadDocument => recarrega a pagina ao clicar na tag Link
function Navbar(){
    return(
        <nav>
            <div>
                <Link to="/">Style Spot</Link>
            </div>
            <div id="elemento">
                <Link to={'/'} >Home</Link>
                <Link to={'/produtos/womens-dresses'}>Roupas</Link>
                <Link to={'/produtos/womens-jewellery'}>Joias</Link>
                <Link to={'/produtos/mens-shoes'}>Tenis</Link>
                <Link to={'/produtos/mens-watches'}>Relogio</Link>                
            </div>
            <div className="barra_pesquisa">
                <input type="search" name="" id="" placeholder="Pesquise o produto"/>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </nav>
    );
}

export default Navbar; //modularização, fazendo documentos importaveis