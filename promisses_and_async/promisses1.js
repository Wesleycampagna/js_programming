
console.log('--- one --');

let promisse1 = new Promise((resolve, reject) => {
    console.log('--- two ---');
    // faça algo 
    setTimeout(() => {
        resolve("algo de sucesso que deve ser retornado <Qualquer tipo>")
        reject("err")
    }, 2000)
})

console.log('--- three ---');

// estrutura para captura
promisse1
.then((/* variavel que devem receber a captura*/ resultado) => {
    console.log('-- four ---');
    console.log(resultado)
})
.then((testeErr) => {
    console.log(testeErr)
})
.catch((err) => {
    console.log(err)
})

console.log('--- five    ---');