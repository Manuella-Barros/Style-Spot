// Componente são função retornaveis e tem o nome com letra maiuscula
// Componetes podem ser usadas como tags
import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar(){
    return(
        <nav>
            <div>
                <Link to="/">Style Spot</Link>
            </div>
            <div id="elemento">
                <Link to={'/'}>Home</Link>
                <Link to={'/produtos/roupas'}>Roupas</Link>
                <Link to={'/produtos/joias'}>Joias</Link>
                <Link to={'/produtos/tenis'}>Tenis</Link>
                <Link to={'/produtos/relogios'}>Relogio</Link>                
            </div>
            <div className="barra_pesquisa">
                <input type="search" name="" id="" placeholder="Pesquise o produto"/>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </nav>
    );
}

export default Navbar; //modularização, fazendo documentos importaveis