const express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    console.log(req.body.session, req.body.plant_name)
})

router.post('/', (req, res) => {
    console.log(req.body.session, req.body.plant_name, req.body.title, req.body.date, req.body.emotion, req.body.images, req.body.content)
})

module.exports = router