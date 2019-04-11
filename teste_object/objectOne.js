// é possivel colocar um object dentro de outro object 

var pessoa = {
    nome: "jão",
    idade: 30,
    endereco: {
        rua: "birita",
        numero: 400,
        bairro: "51"
    }
}

//acesso normal
console.log("normal: " + pessoa.nome)

//introspecção 
console.log("introspecção: " + pessoa["nome"])

//acesso a variavel interna 
console.log("acesso object interno: " + pessoa.endereco.rua)
//introspecção acesso object interno
console.log("introspecção object interno: " + pessoa["endereco"]["rua"])

// razão de utilizar o object introspecto é que variaveis reservadas 
// e que contenham espaço podem ser descritas dentro do object

console.log("----------------")
for(var i in pessoa)
    // issso é um pouco estranho ainda: pessoa[i]
    console.log(pessoa[i])

// adicionando um object que possui 