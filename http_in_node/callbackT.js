/* Este teste é apenas para melhorar conhecimento de callback na linguagem */

let my_listen = (port, msg) => {
    if (msg && typeof(msg) === 'string')
        console.log(msg + port);
    if (msg && typeof(msg) === 'function')
        msg(port) 
}

/* chamada com mensagen */
my_listen(3000, 'server at port: ');

/* chamada apenas da porta */
my_listen(3000)

/* com function */
my_listen(3000, (port) => {
    console.log('server at port: ' + port);
})


