import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const opcoesFiltro = { // Informações do filtro
    'roupas': ["Masculino", "Feminino", "Caro", "Barato"],
    'joalheria': ["Oculos", "Joias", "Caro", "Barato"],
    'relogios': ["Masculino", "Feminino", "Caro", "Barato"],
    'tenis': ["Masculino", "Feminino", "Caro", "Barato"],
}

const pesquisa = {
    'masculino': {'roupas': 'shirts', 'relogios': 'watches', 'tenis': 'shoes'}, 
    'feminino': {'roupas': 'dresses', 'relogios': 'watches', 'tenis': 'shoes'}, 
    'oculos':{'joalheria': 'sunglasses'},
    'joias': {'joalheria': 'womens-jewellery'},
    'caro': 'caro',
    'barato': 'barato'
}

let auxFiltro = ""; // PARA CONSEGUIR DESFILTRAR SEM BUGAR O BOTÃO

function Filtros({setFiltro, filtro}) {
    const parametros = useParams();

    function filtrar(e){
        const ativo = document.querySelector('.ativo') 
        let valor = e.target.innerText.toLowerCase();

        if(e.target.classList.contains('ativo')){ // Se o botão já ta ativo
            e.target.classList.remove('ativo'); // Tira o ativo
            setFiltro(null); // Tira o filtro
        } else{ // Se o botão não ta ativo
            e.target.classList.add('ativo') // Adiciona  ativo
            switch (valor){
                case "masculino":
                    setFiltro(`mens-${pesquisa[valor][parametros.categoria]}`);
                    break;
                case "feminino":
                    setFiltro(`womens-${pesquisa[valor][parametros.categoria]}`);
                    break;    
                case "oculos":
                    setFiltro(pesquisa[valor][parametros.categoria]);
                    break;
                case "joias":
                    setFiltro(pesquisa[valor][parametros.categoria]);
                    break;
                case "caro":
                    setFiltro(pesquisa[valor]);
                    break;
                case "barato":
                    setFiltro(pesquisa[valor]);
                    break;
            }          
        } 
    }

    return (
        <>
            {opcoesFiltro[parametros.categoria].map((filtro, i) => <a onClick={filtrar} key={i}> {filtro} </a> )}
        </>
    )
}

export default Filtros;