let hoje = new Date()

/* horario do browser que manipula a função */
console.log(hoje)

/* obtem o tempo total do começo da contagem até a chamada do newDate() */
hoje = hoje.getTime()           /* ou: let hoje = new Date().getTime() */
console.log('x: ', hoje)

/* pode-se passar uma data para ser transformada nesse valor raw - exemplo natal de 2015 */
let natal_2015 = new Date('2015/12/25')   /* válido: AAAA/MM/DD ou MM/DD/AAAA */
console.log(natal_2015)

let natal_2015_parse = Date.parse('2015/12/25')  /* pode ser trocado por '-' ao inves de / -> funfa */
console.log('parse --')
console.log(natal_2015_parse)

natal_2015 = new Date(natal_2015_parse)
console.log(natal_2015)

/* não aceita nosso padrão */
console.log('invalid?: ', new Date('25/12/2015'))

console.log('valid?: ', new Date('12/25/2015 13:00:00 +03:00'))  /* date hms fuso */

let hoje_2 = new Date('-03Z')
console.log(hoje_2)       /* ver depois */

console.log(new Date().getDate(), new Date().getMonth(), new Date().getFullYear(), new Date().getHours(), new Date().getMinutes())
console.log(new Date(hoje).getDate(), new Date(hoje).getMonth(), new Date(hoje).getFullYear(), new Date(hoje).getHours(), new Date(hoje).getMinutes())

y = Date.UTC('2015', '11', '25', '13', '00', '00', '00')
console.log(y)
console.log(new Date(y))


/* faltou descobrir como faz para capturar a data atual e ja fazer o timezone */
