

let promisse1 = new Promise((resolve, reject) => {
    // faça algo 
    setTimeout(() => {
        resolve("algo de sucesso que deve ser retornado <Qualquer tipo>")
        reject("err")
    }, 2000)
})

// estrutura para captura
promisse1
.then((/* variavel que devem receber a captura*/ resultado) => {
    console.log(resultado)
})
.then((testeErr) => {
    console.log(testeErr)
})
.catch((err) => {
    console.log(err)
})