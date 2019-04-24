const fs = require('fs')

const obj = {}

fs.readFile('file-descrybe1.txt', (err, data) => {
    !err ? obj.dataOne = data.toString() : console.log('error')
    fs.readFile('file-descrybe2.txt', (err, data) => {
        !err ? obj.dataTwo = data.toString() : console.log('error')
        console.log(obj);
    })    
})

/* a possible resolution for this is like preceed */ 

console.log('final');