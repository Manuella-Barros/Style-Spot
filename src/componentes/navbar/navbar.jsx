// Componente são função retornaveis e tem o nome com letra maiuscula
// Componetes podem ser usadas como tags
import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import './navbar.css';
import Listagem from "../../pages/listagem/listagem";

// reloadDocument => recarrega a pagina ao clicar na tag Link
function Navbar(){
    let menu;
    
    function HandleMenuClick() {
        menu = document.getElementById("mobile-menu");

        if (menu.classList.contains('mobile-menu-closed')) {
            console.log('abriu')
            menu.classList.replace("mobile-menu-closed", "mobile-menu-open");
        } else {
            console.log("fechou");
            menu.classList.replace("mobile-menu-open", "mobile-menu-closed");
        }
    }
    
    return (
        <>
            <nav>
                <div>
                    <Link to="/">Style Spot</Link>
                </div>

                <div className="mobile-menu-icon">
                    <button onClick={HandleMenuClick}>
                        <i className="fa-solid fa-bars"></i>
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