var max = 10000

//definindo primeira function to transport for other js
module.exports.generate = function(){
    return Math.floor(Math.random() * max)
}

//definindo segunda function to transport for other js
module.exports.generateUntilTen = function(){
    return Math.floor(Math.random() * max/1000)
}
// não é mais possivel usar o comando abaixo quando faço "module.exports" no lugar de var *
//console.log(generate())
