// o *.call chama um objeto para referenciar o this.*
// exemplo: 

var getName = function () {
    return this.name   // não existe em java esta propriedade de adicionar dentro de um obj o método
}

var Pessoa = {
    name: "Wesley",
    age: 18,
    //getName: getName      ***h
}

// Note que getName tem seu return o uso de this.* que deve referenciar a algum atributo de um object 
// porem como exemplo function_object2.js chamado diretamente (método getName) ele retorna "undefined"

// porem com *.call(object) é como se o método chamasse por um object pra poder referenciar algo

console.log(getName.call(Pessoa))

// deste modo não é necessario que exista um dicionario dentro do object para ser invocado (ref ***h)

// o apply é equivalente para este caso
console.log(getName.apply(Pessoa))
console.log('---------')

//Qual a diferença? mostramos com Pessoa2 e getName2

var getName2 = function (extra) {
    return this.name  + extra   
}

var Pessoa2 = {
    name: "Wesley Souza ",
    age: 18,
    getName2: getName2     
}

// está na forma com a qual eu chamo os valores
console.log(Pessoa2.getName2("Campagna"))
// parametros seguem do parametro do object
console.log(getName2.call(Pessoa2, "Campagna"))
// parametros dentro do array
console.log(getName2.apply(Pessoa2, ["Campagna"]))
