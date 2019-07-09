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