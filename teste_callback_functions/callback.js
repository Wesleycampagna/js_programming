// pra entender este passo. Será necessario ir por partes

// uma forma de de fazer uma calculadora é 

var calculadora = function(num1, num2, typeCalc){  //typeCalc = {add, subtration, multiply}
    if (typeCalc === "add")
        return num1 + num2
    else if (typeCalc === "sub")
        return num1 - num2
    else if (typeCalc === "multiply")
        return num1* num2
    else
        console.log("invalid operation!")
}

// print
console.log(calculadora(5,3, "add"))
console.log(calculadora(5,3, "sub"))
console.log(calculadora(5,3, "multiply"))
console.log('-------------------')

// uma segunda forma de fazer a mesma operação é:

var add = function (num1, num2){
    return num1 + num2
}

var sub = function (num1, num2){
    return num1 - num2
}
var multiply = function (num1, num2){
    return num1 * num2
}

let nums = (a, b) => {
    console.log("nums: ${a + b}, ${b}");
}

/* 
let nums = function(num1, num2) {
    console.log('nums: ${num1}, ${num2}');
} */

// E aqui já começa callbacks com lambda
var calculadora2 = function (num1, num2, callback){
    if (callback) return callback (num1,num2)
    else return `nums: ${num1} e ${num2}.`
}

// print
console.log(calculadora2(5,3, add))
console.log(calculadora2(5,3, sub))
console.log(calculadora2(5,3, multiply))
console.log(calculadora2(5,3, nums))
console.log('-------------------')

// E aqui a transformação total com callback
// mesmo fazendo os passos ainda a logica não parece completa ... 
calculadora2(5,3, function ( a, b) { 
    return a + b
   })
console.log(calculadora2(5,3, function ( a, b) {  return a + b}))
console.log(calculadora2(5,3, function ( a, b) {  return a - b}))
console.log(calculadora2(5,3, function ( a, b) {  return a * b}))
console.log('-------------------')

// Em resumo aparentemente os dois primeiros valores participam da function de callback 
// Na verdade o valor o 'function' some do return por não ter nome: calculadora2(5,3, function ( a, b) {  return a + b}) 
// poderia ser calculadora2(5,3, function ( a, b) {  return 'nome function' (a + b)})

// ERRATA: var calculadora2 = function (num1, num2, callback){    return callback (num1,num2) } ainda é a function 
// logo se eu chama-la passando num1 = 4 e num2 = 5 e no lugar de passar 'calback' que é uma function é escrever a function
// resulta calculadora2(5,3, function ( a, b) {  return a + b}) onde
// function ( a, b) {  return a + b} é um function que poderia ter sido escrita anteriormente como ocorre var sub, multiply e add
// Note que isto ainda é dificil de entender visto que na posição existe um parametro que não tem simetria com o seu tipo.
// pode ser uma var ou uma function mesmo esta ultima sendo tbm uma var. Claro, obviamente uma var n retorna uma operação 

/* let testeFinal = calculadora2(2, 3, function(a, b) {
    return 'Os dois numeros passados como parametro são ${a} e ${b}'
}) */

console.log(calculadora2(2, 3, function(a, b) {
    return `Os dois numeros passados como parametro são ${a + b} e ${b}`
}))

calculadora2(2, 3, function(a, b) {
    console.log('Os dois numeros passados como parametro são %d e %d', a, b)
})

let teste = (a, b) => {
    //var a = 5;
    //var b = 10;

    console.log(`Quinze é ${a + b} e não ${2 * a + b}.`);
}// "Quinze é 15 e não 20.




console.log('------');

console.log(teste(5, 10));
console.log('------');

console.log(calculadora2(5, 10, teste))
console.log('------');

console.log(calculadora2(5, 10, (a, b) => {
    return `Quinze é ${a + b} e não ${2 * a + b}.`
    } ))

// no meu exemplo não funcionou. Raios isso
console.log('------');

console.log(calculadora2(2, 3, add))
console.log(calculadora2(2, 3))