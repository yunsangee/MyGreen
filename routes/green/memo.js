const express = require('express')
const db = require('../../db/database')

var router = express.Router()

router.post('/', (req, res) => {
    console.log(req.body.session, req.body.plant_name, req.body.memo)
})

router.get('/', (req, res) => {
    console.log(req.body.session, req.body.plant_name)
})

module.exports = router