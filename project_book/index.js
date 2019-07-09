'use strict'

const express = require('express')
const main = express()
const path = require('path')

// criei um arquivo de rota 
const routes = require ('./routes/index')

main.set('views', path.join(__dirname, 'views'))
main.engine('html', require('ejs').renderFile)

main.set('view engine', 'html')

main.use(express.static(__dirname + '/public'))

// com use consigo consumir o exports in routes
main.use('/', routes)


const port = process.env.PORT || 7070

console.log(process.env.PORT);

main.listen( port, () => {
    console.log('server rodando:' + port)
})