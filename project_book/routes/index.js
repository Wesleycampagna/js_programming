const app = require('express')
const router = app.Router()

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })

router.use(async (req, res, next) => {

    // até posso usar o res.send, but, therefore, não permite um segundo envio ao cliente 
    // logo utilizar o método use serve apenas para servidor 
    //res.send('teste')
    next()
})

router.get('/', (request, response) => {
    //response.render('pages/index')
    console.log(request.query);
    let returned = request.query

    /*      PATTERN

    ?numberOfIndividuals=16&taxOfCrossover=0.7&taxOfMutation=0.3
    &lines=5&collumn=5&maxStack=4000

    */
    response.json(returned)
})

router.get('/t', (req, res) => {
    console.log('that!!')
})

module.exports = router;