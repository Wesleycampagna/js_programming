/* todo object tem implicito um prototype */

let jão = {
    nome: 'jão',
    idade: 18,
    sexo: 'm',
}

let jãozinho = {
    nome: 'jãozinho',
    idade: 16,
    sexo: 'm',
}

let jona = {
    nome: 'jona',
    idade: 17,
    sexo: 'f',
}

let jãos = [jona, jão, jãozinho]

console.log(jãos)

/* primeira forma de se fazer prototype é utilizando do operator _proto_ (não recomendado)
Neste caso existirá uma classe pai que representa a caracteristica comum.
Também manualmente é possivel fazer por setPrototypeOf e create */

/* objetos pais */
let homem = { sexo: 'masc' }
let mulher = { sexo: 'fem' }

/* setPrototypeOf */
jão = {
    nome: 'jão',
    idade: 18
}

Object.setPrototypeOf(jão, homem)

/* __proto__ */
jãozinho = {
    nome: 'jãozinho',
    idade: 16,
    __proto__:homem
}

/* create */
jona = Object.create(mulher)
jona.idade = 17
jona.nome = 'jona'


console.log('------------')
jãos = [jona, jão, jãozinho]

for (let j in jãos) console.log(jãos[j].sexo)
console.log('-----------------')

/* agora chega a parte de prototype. Até então era [[prototype]] herdada do Object que existe como
padrão. Neste abaixo é um método caracteristico de uma function e não mais dependente diretamente
de Object. */

/* logo por exemplo numa unção fábrica: */
let pessoa = function (nome, idade){
    return {
        nome: nome,
        idade, idade
    }
}

pessoa.prototype.sexo = 'masc'

jão = pessoa('jão', 18)
jão.__proto__ = pessoa.prototype        /* vinculo para o prototype */

jãozinho = pessoa('jãozinho', 16)       /* sem vinculo com prototype */

jãos = [jão, jãozinho]
console.log(jãos)
jãos.forEach((j) => console.log(j.sexo))

