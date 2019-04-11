//imports de java assemelha-se a isto
//var SerialGenerator = require('./SerialGenerator.js')

//imports de java assemelha-se a isto
var SerialGenerator = require('./modules.js')  //   ./ é na mesma pasta.   .<dir>/ passando um diretorio atras ou ../

// var SerialGenerator = require('./modules') valido também
// pra imprimir é necessario que a var que recebeu o require seja chamada e o método ao qual será chamado
console.log(SerialGenerator.generate)

//segundo método dentro do SerialGenerator
//console.log(SerialGenerator.generateUntilTen())