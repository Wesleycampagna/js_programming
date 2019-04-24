const http = require('http')
const url = require('url')
const hello = require('./hello')

var server = http.createServer( (request, response) => {
    response.writeHeader(200, {'Content-Type': 'text/html'})

    response.write(hello.msg('query:'))

    let result = url.parse(request.url, true)
    
    for (let key in result.query)
        response.write(hello.msg(key + ': ' + result.query[key]))

    response.write(hello.msg('href: ' + result.href))
    response.write(hello.msg('protocol: ' + result.protocol))
    response.write(hello.msg('host: ' + result.host))
    response.write(hello.msg('auth: ' + result.auth))
    response.write(hello.msg('port: ' + result.port))
    response.write(hello.msg('pathname: ' + result.pathname))
    response.write(hello.msg('search: ' + result.search))
    response.write(hello.msg('path: ' + result.path))
    response.write(hello.msg('query: ' + JSON.stringify(result.query)))
        
    response.end()
})

/* não concluso:

Um método de callback nada mais é que um função encaminhada ao event loop com um fim pré-designado, 
a função passada por parametro vai realizar uma tarefa sobre aquele evento quando do seu retorno/conclusão. 

Logo listen(3000, (port) => { console.log('server at port: ' + port)})

siginifica que após ele concluir o socket e bind da porta, onde conseguiu ficar disponivel para 
ouvir na porta 3000, exibe, porsteriormente, a mensagem do método passado no parametro.
*/

server.listen(4000, () => {
    console.log('servidor rodando');
})



