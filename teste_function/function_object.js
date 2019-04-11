//objects - tentar assimilar com java 

var Pessoa = {
    name: "Wesley",
    age: 18,

    getName: function () {
        return this.name     // enquanto que em java não é necessario utilizar o this. Aqui é. Acessar atributos do object
    }
}

//chamada 
console.log("nome: " + Pessoa.name)
console.log("nome: " + Pessoa)


//chamada método
console.log("callMethod1: " + Pessoa.getName)
console.log("callMethod2: " + Pessoa.getName())

//function internal ao object 