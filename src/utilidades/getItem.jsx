async function getItems(categoria, limite = 3){

    const categorias = {
        'womens-jewellery': 'jewelery',
        'womens-dresses': 'women\'s clothing',
    }

    // https://fakestoreapi.com/products/category/jeweleryz
    const queryAPI01= `https://dummyjson.com/products/category/${categoria}?limit=${limite}`
    const respostaAPI01 = await fetch(queryAPI01)
    const itensAPI01 = await respostaAPI01.json()

    if(categoria === 'womens-jewellery' || categoria === 'womens-dresses' )
    {
        const queryAPI02= `https://fakestoreapi.com/products/category/${categorias[categoria]}?limit=${limite}`
        const respostaAPI02 = await fetch(queryAPI02)
        const itensAPI02 = await respostaAPI02.json()

        for ( let [i, produto] of itensAPI01.products.entries()) {
            produto.images.unshift(itensAPI02[i].image)
        }

        return itensAPI01.products
    }

    return itensAPI01.products
}

export default getItems