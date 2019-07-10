array = ['a', 'b', 'a', 'a', 'a', 'a', 'a',]

/* retorna true se todos os valores forem equivalentes a 'a' */
let true_c = array.every((element) => {
    return element === 'a'
})

/* retorna true se algum elemento for equivalente a 'a' */
let true_b = array.some((element) => {
    return element === 'a'
})

/* cria novo array 'true_a' com alguma caracteristica - não necessario percorrer com for - lambda implicito */
let true_a = array.filter((ele) => {
    return ele === 'b'
})

/* prints */
console.log(true_c)
console.log(true_b)
console.log(true_a)
console.log('-------------------') 

/* métodos comuns */

vehicles = [ 'car', 'bus']

console.log(vehicles);

/* coloca a frente o novo elemento */
vehicles.push('bike')
console.log(vehicles);

/* retira o ultimo elemento e o retorna */
vehicles.pop()
console.log(vehicles);

/* adiciona um novo elemento na primeira posição e empurra o restante */
vehicles.unshift('bike')
console.log(vehicles);

/* retira o elemento na primeira posição */
vehicles.shift()
console.log(vehicles);

console.log('-------------------')

/* new array */

/* cria um endreço para um array - vazio inicialmente */
let x = new Array()
console.log(x);

/* cria array vazio de 10 posições */
let y = new Array(10)
console.log(y);
y[3] = 'y3'
console.log(y);

/* teste colocando uma posição a mais - de fato expande */
y[11] = 'y11'
console.log(y);

/* retorna o proprio objeto */
console.log(y.valueOf());

console.log('-------------------')

/* operators again */

t = [ 'Brazil', 'United States', 'united Kingdom', 'Turkey']

/* posição que ocorre uma ocorrencia */
console.log(t.indexOf('Brazil'));

/* com duas posições? */
t.push('Brazil')
console.log(t);
console.log(t.indexOf('Brazil'));

/* splice: 1o parametro do metodo é a partir de que elemento quer-se remover e o 2o é a quantidade após a posição 
--> pode ser maior que ele não dá erro de 'index out of bound' */
console.log('removidos: ' + t.splice(2, 4))
console.log(t);

/* há a possibilidade de adicionar elemento ao fim com um terceiro parametro */
t.push( 'united Kingdom', 'Turkey')
console.log(t);
console.log('removidos: ' + t.splice(2, 1, 'Eslovenia'))
console.log(t);

/* tentativa de mais de um elemento - quantos elementos de parametros vierem anexam no novo vetor */
console.log('removidos: ' + t.splice(2, 1, 'Eslovenia', 'UK'))
console.log(t);

/* adicionar apenas elementos ao array */
console.log('removidos: ' + t.splice(2, 0, 'Peru'))
console.log(t);

console.log('-------------------')

/* operator map */

/* esse operator é interessante por possibilitar que se faça operações com os elementos */
carros = [  { marca: 'Ford', modelo: 'ranger'}, 
            { marca: 'Chevrolet', modelo: 'corsa'}, 
            { marca: 'Fiat', modelo: 'uno'}]

let marcas = carros.map((marcas) => {
    return marcas.marca
})

let modelos = carros.map((modelos) => {
    return modelos.modelo
})

console.log(marcas)
console.log(modelos)

/* retornando o lenght da marca */

let len_marca = carros.map((marcas) => {
    return marcas.marca.length
})

console.log(len_marca)

console.log('-------------------')

/* operator reduce - somatorios */

let quatros = [4, 4, 4]

/* estrutura: previous + operando + current. reduce(function, start_value) */
let somatorio_4 = quatros.reduce((previous_el, current_el) => {
    return previous_el + current_el
}, quatros[0])

let somatorio_4_2 = quatros.reduce((previous_el, current_el) => {
    return previous_el + current_el
}, 2)

console.log(somatorio_4)
console.log(somatorio_4_2)

console.log('-------------------')

/* concatenação de vetores */

/* teste inicial */
let mamiferos = ['morcego', 'humano', 'vaca']
let reptios = ['cobra', 'lagarto']
let ave = ['pombo', 'galinha']

let m_r = mamiferos + reptios

/* comportamento estranho */
console.log(m_r)


/* provado abaixo - como se fizesse toString() acima 
m_r.forEach(element => {
    console.log(element)
}) */

/* usando concat */
m_r_2 = mamiferos.concat(reptios)
console.log(m_r_2)

/* teste abaixo -> manteve o array original - show */
console.log(mamiferos)

/* slice - parece splice kkk */

/* retorna um novo vetor da posição <parametro 1> até posição <parametro 2> */
console.log(mamiferos.slice(1,2))   // humano

console.log('-------------------')

/* reverse */

/* inverte vetor - inverte sem o/a link/atribuição - mantem referencia do objeto */
console.log(ave.reverse())
console.log(ave)

console.log('-------------------')

/* join - inverso de split */

/* dará NaN */
let risos = 'sah' * 6
console.log(risos)

/* porem se fizer: */
risos = new Array(6).join('sah')
console.log('risada: ', risos)

/* join efeito */
console.log('reptios: ', reptios.join(', '))

/* join + split */
console.log(reptios.join(', ').split(', '));

