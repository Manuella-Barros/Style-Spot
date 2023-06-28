import React from "react";

async function getItem(categoria, limite = 3){
    const response = await fetch(`https://dummyjson.com/products/category/${categoria}?limit=${limite}`)
    const itens = await response.json();
    //console.log(itens);
    //console.log(categoria);
    return itens.products;
}

/*
//async = assincrona  // await = espere  //só é chamada depois que o fetch ta pronto
async function getItem({categoria}){
    fetch(`https://dummyjson.com/products/category/${categoria}?limit=3`) //usou query string para limitar a 3 componente
    //O fetch retorna uma promise pois é uma requisição, demora um pouco pra devolver a informação
    .then(res => res.json()) // A requisição devolve json, e para impedir isso coloca .json, ai devolverá como objeto
    .then((resposta) => console.log(resposta));//then => seguir o codigo só depois de receber a resposta do fetch
}
*/
export default getItem;