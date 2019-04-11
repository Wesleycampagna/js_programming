// testing: module.exports
//          exports
//          this

var max = 10000

//definindo primeira function to transport for other js
exports.generate = function(){
    return Math.floor(Math.random() * max)
}

module.exports = {
    generate: max
}

