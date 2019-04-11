var createCounter = function (){
    var value = 0
    var value2 = 1
    return {                    // return um dicionario 
        add: ()=> {
            return ++ value + value2     // return o valor da operação do dicionario 
        }
    }
}

var count = createCounter()
console.log(count.value)
console.log(count.add())
console.log(count.add())

console.log('----')

var Counter2 = function (){
    var value = 0
    
    return {
        add: ()=> {
            return ++value
        },
        reset: ()=>{
            value = 0
        },
        add_10: () => {
            return value += 10
        }
    }
}

var count2 = Counter2()
console.log(count2.value)
console.log(count2.add())
console.log('-----')
console.log(count2.add_10())
console.log('-----')
console.log(count2.add())
count2.reset()
console.log(count2.add())
console.log(count2.add())

console.log('----')

// já com execução
var counter3 = (() => {
    var value = 0
    // cria function add
    add = ()=> {
        return ++value
    }
    // cria function reset
    reset =  ()=>{
        value = 0
    }
    // return dicionario
    return {
        add: add,
        reset: reset
    }
})()

// resumido
/*var counter3 = (() => {

    var value = 0
    
    add = () => ++value
    
    reset =  () => value = 0
    
    return {
        add: add,
        reset: reset
    }
})()*/

//var count3 = new Counter3()
console.log(counter3.value)
console.log(counter3.add())
console.log(counter3.add())
console.log(counter3.add())
counter3.reset()
console.log(counter3.add())
console.log(counter3.add())