
// vale lembrar que a function foi salva em uma "var" logo:
console.log("function save: " + soma2)

// padrão de function
function func (a, b){
    return a + b;
}

// function alocate to variable normal 
var soma = function func (a, b){
    return a + b;
}

//function express 
var soma2 =  function (a, b){
    return a + b;}

// function lambda/arrow  --> () => {}
var soma3 = (a, b) => {
    return a + b;
}

var numOne = 4
var numTwo = 10

//chamando function dentro de outro método
console.log(func(numOne, numTwo))
console.log("teste: " + func)
console.log("normal: " + soma(numOne, numTwo))
console.log("express: " + soma2(numOne, numTwo))
console.log("lambda: " + soma3(numOne, numTwo))

// vale lembrar que a function foi salva em uma "var" logo:
console.log("function save: " + soma2)

