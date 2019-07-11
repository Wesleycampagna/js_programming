let call = (str) => console.log(str, new Date())

/* a ideia dos call é mostrar o no-blocking i/o */
call('antes')

/* setTimeout serve para após certo tempo executar o que está na function parametro */
setTimeout(() => {
    call('timeout')
}, 1000);

call('depois')

/* setInterval serve para atribuir um intervalo com repetição constante - algo recursivo */
let card = 1
let interval = setInterval(() => {
    call(card++)
}, 1000)

/* setImmediate serve para escalar processos */
setImmediate(() => call('após'))

/* clearInterval serve para resetar o intervalo existente */
setTimeout(() => clearInterval(interval), 9000)

/* Este cara executa após os events on loop ma não após os timers */
setImmediate(() => call('após -'))
console.log('final');




