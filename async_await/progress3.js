const fs = require('fs')

const obj = {}

const readFileA = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('file-descrybe1.txt', (err, data) => {
            !err ? resolve(data.toString()) : console.log('error')
        })       
    })
}

const readFileB = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('file-descrybe2.txt', (err, data) => {
            !err ? resolve(data.toString()) : console.log('error')
        })        
    })

}

// data é o valor retornado do resolve
readFileA().then((data) => {
    obj.dataOne = data
    // call second method
    readFileB().then((data) => {
        obj.dataTwo = data
        console.log(obj);
    })
})

/* Esta forma é usada para fazer com Promisse */

console.log('final');