const http = require('http')
const hello = require('./hello')

var server = http.createServer( (request, response) => {
    response.writeHeader(200, {'Content-Type': 'text/html'})
    if (request.url == '/')
        response.write(hello.msg('Hello World!'))

    else if (request.url == '/other')
        response.write(hello.msg('other page'))

    else 
        response.write(hello.msg('404: not found'))

    response.end()
})

server.listen(4000, () => {
    console.log('servidor rodando');
})



