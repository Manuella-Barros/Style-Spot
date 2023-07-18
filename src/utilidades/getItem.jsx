async function getItem(categoria, limite = 3){
    
    const categorias = { //Relacionando os valores do atributo categoria das 2 API
        'womens-jewellery': 'jewelery',
        'womens-dresses': 'women\'s clothing',
    }

    // https://fakestoreapi.com/products/category/jeweleryz
    const queryAPI01= `https://dummyjson.com/products/category/${categoria}?limit=${limite}`;
    const respostaAPI01 = await fetch(queryAPI01);
    const itensAPI01 = await respostaAPI01.json();

    if(categoria === 'womens-jewellery' || categoria === 'womens-dresses')
    { //Para pegar as imagens e id se categoria for esses 2 valores

        const queryAPI02= `https://fakestoreapi.com/products/category/${categorias[categoria]}?limit=${limite}`;
        const respostaAPI02 = await fetch(queryAPI02);
        const itensAPI02 = await respostaAPI02.json();
        
        //Pra juntar informações das 2 api
        //O i = indice e o produto = valor da primeira API
        //No itensAPI01.products.entries() ta acessando as chaves desse json
        for ( let [i, produto] of itensAPI01.products.entries()) {
            //Esse if usa Optional chaining operator
            //Se itensAPI02[i].image existir, retorna .image
            //Ou seja, se existir essa posição no elemento, entra no if 
            if(itensAPI02[i]?.image){
                //Adiciona os valores do atributo image da 2ª API na 1ª posição do atributo images da 1ª API
                produto.images.unshift(itensAPI02[i].image);
                //Aqui cria o atributo fakestoreID na 1ª API e adiciona nela o valor do id da 2ª API
                produto.fakestoreID = itensAPI02[i].id;       
            }
        }
    }

    //Exato mesmo processo do if de cima, só que com images e id colocados manualmente
    //Para adicionar novas imagens nos sapatos na 1ª API
    if(categoria === 'mens-shoes'){ 
        const imgs = [
            '/images/list/shoes/shoes1.jpg',
            '/images/list/shoes/shoes2.jpg',
            '/images/list/shoes/shoes3.jpg',
            '/images/list/shoes/shoes4.jpg',
            '/images/list/shoes/shoes5.jpg',
        ]

        for ( let [i, produto] of itensAPI01.products.entries()) {
            //Adiciona as imagens na 1ª posição do atributo images da 1ª API
            produto.images.unshift(imgs[i]);
            //Adciona um atributo chamado shoesID na 1ª API e da a ele o valor do index
            produto.shoesID = i;
        }
    }

    return itensAPI01.products;
}

export default getItem;