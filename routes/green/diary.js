const express = require('express')
const db = require('../../db/database')

var router = express.Router()

router.get('/:session/:plant_name', (req, res) => {
    var params = req.params;
    console.log(params);
   
   res.send(params.session + params.plant_name);
})

router.post('/', (req, res) => {
    console.log(req.body.session, req.body.plant_name, req.body.title, req.body.date, req.body.emotion, req.body.images, req.body.content)
})

module.exports = router