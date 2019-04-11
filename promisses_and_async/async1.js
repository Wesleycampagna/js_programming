// exemplo async
async function main(){
    // se (após processar etResult o result for maior que 10 return console log)
    if (await getResult(5) > 10) 
        console.log('valor que retornou é maior que 10')
    else 
        console.log('O valor é menor que 10!')
}

main()

function getResult(parametro){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (parametro * 1.9)
        }, 2000)
    })
}