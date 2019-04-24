const express = require('express')
const Router = express.Router()

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })

main.get('/', (request, response) => {
    //response.render('pages/index')
    console.log(request.query);
    let returned = request.query

    /*      PATTERN

    ?numberOfIndividuals=16&taxOfCrossover=0.7&taxOfMutation=0.3
    &lines=5&collumn=5&maxStack=4000

    */
    response.json(returned)
})

main.get('/t', (req, res) => {
    console.log('that!!')
})