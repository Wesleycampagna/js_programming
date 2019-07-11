const fs = require('fs')

const obj = {}

const readFileA = async () => {
    return fs.readFile('file-descrybe1.txt', (err, data) => {
        !err ? data.toString() : console.log('error')
    })  
}

const main = async() => {
    obj.dataOne = await readFileA()
    obj.dataTwo = await readFileB()
    console.log(obj)
}

const readFileB = async () => {
    return fs.readFile('file-descrybe2.txt', (err, data) => {
        !err ? data.toString() : console.log('error')
    })  
}

main()

/* Esta forma é direta */

console.log('final');