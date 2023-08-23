// Componente são função retornaveis e tem o nome com letra maiuscula
// Componetes podem ser usadas como tags
import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import './navbar.css';
import Listagem from "../../pages/listagem/listagem";

// reloadDocument => recarrega a pagina ao clicar na tag Link
function Navbar(){
    let menu, menuIcon;
    
    function HandleMenuClick(e) {
        const btn = e.target

        // Icone abre e fecha
        if (btn.classList.contains("iconNormal")){
            btn.classList.toggle("iconRotate");
            btn.classList.toggle("iconNormal");
        } else{
            btn.classList.toggle("iconRotate");
            btn.classList.toggle("iconNormal");
        }

        // Menu abre e fecha
        menu = document.getElementById("mobile-menu");
        menuIcon = document.getElementById("mobile-menu-icon");

        if (menu.classList.contains('mobile-menu-closed')) {
            menu.classList.replace("mobile-menu-closed", "mobile-menu-open");
        } else {
            menu.classList.replace("mobile-menu-open", "mobile-menu-closed");
        }
    }
    
    return (
        <>
            <nav>
                <div>
                    <Link to="/">Style Spot</Link>
                </div>

                <div id="mobile-menu-icon">
                    <button onClick={HandleMenuClick}>
                        <i className="fa-solid fa-bars iconNormal"></i>
                    </button>
                </div>

                <div id="elemento">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/produtos/roupas"}>Roupas</Link>
                    <Link to={"/produtos/joalheria"}>Joias</Link>
                    <Link to={"/produtos/tenis"}>Tenis</Link>
                    <Link to={"/produtos/relogios"}>Relogio</Link>
                </div>
            </nav>

            <div className="mobile-menu-closed" id="mobile-menu">
                <Link to={"/"}>Home</Link>
                <Link to={"/produtos/roupas"}>Roupas</Link>
                <Link to={"/produtos/joalheria"}>Joias</Link>
                <Link to={"/produtos/tenis"}>Tenis</Link>
                <Link to={"/produtos/relogios"}>Relogio</Link>
            </div>
        </>
    );
}

export default Navbar; //modularização, fazendo documentos importaveis