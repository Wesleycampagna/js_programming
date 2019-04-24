const fs = require('fs')

const obj = {}

fs.readFile('file-descrybe1.txt', (err, data) => {
    !err ? obj.dataOne = data.toString() : console.log('error')
})

fs.readFile('file-descrybe2.txt', (err, data) => {
    !err ? obj.dataTwo = data.toString() : console.log('error')
})

console.log(obj);

/* that's not async, as the readFile is more slowly console.log(obj) execute fisrt */

console.log('final');