const fs = require('fs')

const obj = {}

const readFileA = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('file-descrybe1.txt', (err, data) => {
            !err ? resolve(data.toString()) : console.log('error')
        })       
    })
}

const main = async () => {
    obj.dataOne = await readFileA()
    obj.dataTwo = await readFileB()
    console.log(obj)
}

const readFileB = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('file-descrybe2.txt', (err, data) => {
            !err ? resolve(data.toString()) : console.log('error')
        })        
    })

}

main()

/* Esta forma é usada para fazer com Promisse and async/await */

console.log('final');