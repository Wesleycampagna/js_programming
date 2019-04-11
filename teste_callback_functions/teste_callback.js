// 1. passar diretamente a function 

    //console.log(function( 5, 2, function (a, b) { return a+b;}));

// não deu certo. Aparentemente não é possivel passar dessa forma 

// logo,

// A base de uma function de callback 
var calculadora = function (a, b, callback){
    return callback (a, b);
}

// A priori deu pra entender 
console.log (calculadora(5, 2, function (a, b){ return a + b }))
console.log ('------------')

