var soma = function (a, b){
    return a + b;
}

// passagem direta da função para obter o valor global 
console.log(soma(2,2))

var product = { 
    name: 'Sapato',
    preco: 30,
    bostaAlguma: 1000
}

var productTax = function (value){
    return value * 0.2;
}

var calculateValue = function (productT /* object */, productTaxT /* var da function */){
    // return 30          + 1000 * 0.2
    return productT.preco + productTaxT(productT.bostaAlguma)
}

var calculateValue = function (productT /* object */){
    // return 30          + 1000 * 0.2 = 200
    return productT.preco + productTax(productT.bostaAlguma)
}

//chamada da resposta
console.log("valor p: " + product.bostaAlguma)

//chamada da resposta
console.log("valor taxa: " + calculateValue(product, productTax))

// Em suma parece que é besteira coloca o segundo parametro para receber uma function. Essa 
//function poderia ser apenas chamada dentro da própria function

// conclusão: Por hora não vale a pena utilizar essa proposta. Annotations tem a descrição sobre isto.


