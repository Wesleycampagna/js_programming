// testing: module.exports
//          exports
//          this

var max = 10000

//definindo primeira function to transport for other js
/* export function generate(){
    return Math.floor(Math.random() * max)
} */

/* sobrescreve method */
this.method = () => console.log('exporting... ')

exports.generate = function(){
    return Math.floor(Math.random() * max)
}

exports.generateConst = max;

/* 
    tx: deste modo abaixo sem passar a uma variavel o valor. todo o módulo à exportar
    é definido em apenas um objeto. 
 */
/* module.exports = {
    method2: 'break?'
} */

/* sobrescreve method */
this.method = () => console.log('exporting... ..')

/* sobrescreve generate */
module.exports.generate = () => {return 'break?'}

/* this, exports e module.exports tornam os atributos ou métodos públicos para outra classe poder os 
utilizar. 

module_exports tem maior força que os demais. Logo se apenas 1 elemento for enviado com module os
demais exports e this são desconsiderados - pelos testes em tx generate ainda mateve-se sendo 
exportado */

/*  ----------------------------------------------------------
            padrão de projeto 
    ----------------------------------------------------------
let generate = function
let generateConst = atributo
let method = function

module.exports = {
    generate: generate
    generateConst: generateConst
    method: method
}

neste caso this e exports nao funcionam
*/
