const express = require('express')
const db = require('../../db/database')

var router = express.Router()

router.post('/', (req, res) => {
    console.log(req.body.id, req.body.password, req.body.name, req.body.birth, req.body.gender, req.body.email)
})

module.exports = router