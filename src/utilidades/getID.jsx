const imgs = [
    '/images/list/shoes/shoes1.jpg',
    '/images/list/shoes/shoes2.jpg',
    '/images/list/shoes/shoes3.jpg',
    '/images/list/shoes/shoes4.jpg',
    '/images/list/shoes/shoes5.jpg',
]

const categorias = {
    'mens-shoes': 'men\'s clothing',
    'mens-watches': 'men\'s clothing',
    'womens-jewellery': 'jewelery',
    'womens-dresses': 'women\'s clothing',

}

async function getID(search, categoria){
    const query = `https://dummyjson.com/products/${search.get('idPrimario')}`
    const response = await fetch(query)
    const produto = await response.json()

    if(search.get('idSecundario') !== 'none' && search.get('p') !== 'shoes' && search.get('idSecundario') !== 'undefined'){
        const query2 = `https://fakestoreapi.com/products/${search.get('idSecundario')}`
        const response2 = await fetch(query2)
        const produto2 = await response2.json()
        produto.images.unshift(produto2.image)
    }

    if(search.get('p') === 'shoes'){
        produto.images.unshift(imgs[search.get('idSecundario')])
    }

    const query3 = `https://fakestoreapi.com/products/category/${categorias[categoria]}`
    const response3 = await fetch(query3)
    const produto3 = await response3.json()

    // (max - min ) + min
    const nAleatorio = Math.round(Math.random() * (3 - 0 ) + 0)

    produto.description =  produto3[nAleatorio].description

    return produto
}

/* MESMA FUNÇÃO SÓ QUE O UNDEFINED FICA NA URL
async function getID(idPrimario, idSecundario){
    const queryAPI1 = await fetch(`https://dummyjson.com/products/${idPrimario}`);
    const respostaAPI1 = await queryAPI1.json();
    
    if(idSecundario != "undefined"){
        const queryAPI2 = await fetch(`https://fakestoreapi.com/products/${idSecundario}`);
        const respostaAPI2 = await queryAPI2.json();

        respostaAPI1.images.unshift(respostaAPI2.image);        
    }


    return respostaAPI1;
}
*/

export default getID;