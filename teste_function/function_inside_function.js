var helloWorld = function () {
    return function () {
        return "hello world"
    }
}

//chamada
console.log("chamada1: " + helloWorld)
console.log("chamada2: " + helloWorld())
console.log("chamada3: " + helloWorld()())
//console.log("chamada4: " + helloWorld)

// na chamada2 é como se houvesse um encapsulamento da função em uma variavel. 
// +/- como: var encapsulamento = function() { return "hello world" }
// é como se fizesse console.log(encapsulamento)
// para ver o que existe dentro desta variavel temos que fazer console.log(encapsulamento())
// logo: console.log(helloworld()()) --> chamada3