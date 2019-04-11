var Counter = function (){
    var value = 0
    this.add = function () {
        return ++ value
    }
}

 var count = new Counter()
console.log(count.value)
console.log(count.add())
console.log(count.add())

console.log('----')

var Counter2 = function (){
    var value = 0
    this.add = function () {
        return ++ value
    }
    this.reset = function () {
        value = 0
    }
}

var count3 = new Counter2()
console.log(count3.value)
console.log(count3.add())
console.log(count3.add())
console.log(count3.add())
count3.reset()
console.log(count3.add())
console.log(count3.add())

console.log('----')

// já com execução
var counter3 = (() => {
    var value = 0
    return{
        add: function () {
            return ++ value
        },
        reset: function () {
            value = 0
        }
    }
})()

//var count3 = Counter3()
console.log(counter3.value)
console.log(counter3.add())
console.log(counter3.add())
console.log(counter3.add())
counter3.reset()
console.log(counter3.add())
console.log(counter3.add())