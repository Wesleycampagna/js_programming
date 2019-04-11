// interessante a logica disto 

var Pessoa = function (a, idade ) {    
    this.nome = a
    this.idade = idade
}

/* note que é uma function:
Em suma o javascript consegue fazer por debaixo dos panos todo o esquema do object 
Outra priori é que isto se assemelha e em muito com java 
- O compilador entende que deve existir um object x (por exemplo) que é invocado quando o 
new é chamado: 
    var x = {

    }
- o new também promove o apply/call para x e cria também a key em x pra esses valores 
    var x = {
        nome: ***,
        idade: ***
    }

    Como visto anteriormente em function_apply_call.js o this deve referenciar algum object e 
    neste caso é o object criado pelo new.

*/

var x = new Pessoa("Wesley", 18)

for( var atributos in x)
    console.log(x[atributos])

// deste modo também existe a criação de objects que assimilam-se a instancias 

var y = new Pessoa("Maria", 18)

console.log('-------------')
// interessante este for
for( var atributos in x, y){
    if (atributos == "nome"){
        console.log(atributos + " " + x[atributos])
        console.log(atributos + " " + y[atributos])
    }
}

// por mais que o parametro seja "a" a chamada deve ser do atributo correlacionado com o this
console.log(x.nome)

// object vazio inicialmente 
var z = {}
z = new Pessoa("jão", 70)

console.log(z.nome)

// cria z.nome e z.idade