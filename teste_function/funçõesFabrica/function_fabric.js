// interessante a logica disto 

var Pessoa = function (nome, idade ) {
    return {
        nome: nome, 
        idade: idade
    }
}

// note que é uma function:
// var Pessoa = function (nome, idade ) mas ela retorna um object
// melhor ainda, este object recebe os parametros que foram passados 

// similar ao método construtor de java 

// Deste modo uma var x = Pessoa(nome, idade); nada mais é a criação de uma var x que se torna 
// um object com as duas propriedades da function;

var x = Pessoa("Wesley", 18)

for( var atributos in x)
    console.log(x[atributos])

// deste modo também existe a criação de objects que assimilam-se a instancias 

var y = Pessoa("Maria", 18)

console.log('-------------')
// interessante este for
for( var atributos in x, y){
    if (atributos == "nome"){
        console.log(atributos + " " + x[atributos])
        console.log(atributos + " " + y[atributos])
    }
}

// iniciando com object vazio 

var z = {}
var a = z
z = Pessoa("jão", 70)

console.log(z.nome)

// possivel aloca object para outro 
console.log('------')
for (var i in a)
console.log(a[i])

// aparentemente tem relação de referencia também aqui 
// aponta pra z que aponta pro vazio 
// z depois aponta pra um object que contem a nova alocação das duas variaveis 
// a e z não apontam mais pra mesma coisa ou a copiou pra ti o valor que antes havia em z?