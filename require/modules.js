// testing: module.exports
//          exports
//          this

var max = 10000

//definindo primeira function to transport for other js
/* export function generate(){
    return Math.floor(Math.random() * max)
} */

exports.generate = function(){
    return Math.floor(Math.random() * max)
}

exports.generateConst = max;

