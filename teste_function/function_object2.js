//objects2 - a ideia de que uma variavel pode ser tornar elemento de um object. Neste caso um object que é uma function

var getName = function () {
    return this.name     // não existe em java esta propriedade de adicionar dentro de um obj o método
}

var Pessoa = {
    name: "Wesley",
    age: 18,
    getName: getName
}

//chamada 
console.log("nome: " + Pessoa.name)
console.log("nome: " + Pessoa)


//chamada método
console.log("callMethod1: " + Pessoa.getName)
console.log("callMethod2: " + Pessoa.getName())

//function internal ao object 
// caso se queira invocar diretamente o método o retorno será undefined 
// note que mesmo neste exemplo foi utilizado o this.* e por este fato ele tem que referenciar a algum object. Globalmente não existe 
console.log('------')

//chamada direta do método getName
console.log(getName())