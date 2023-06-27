import React from "react";
import { useParams } from "react-router-dom";

function Listagem(){
    const parametros = useParams();
    console.log(parametros);
    return(
        <main>
            <p>oiii</p>
        </main>
    );
}

export default Listagem;