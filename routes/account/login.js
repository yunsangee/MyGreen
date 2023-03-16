const express = require('express')
const db = require('../../db/database')

var router = express.Router()

router.post('/', (req, res) => {
    console.log(req.body.id, req.body.password)
})

module.exports = router