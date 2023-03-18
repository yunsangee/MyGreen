const express = require('express')
const db = require('../db/database')

const diary = require("./green/diary")
const memo = require("./green/memo")
var router = express.Router()

router.use('/diary', diary)
router.use('/memo', memo)

router.post('/', (req, res) => {
    console.log(req.body.session, req.body.plant_name, req.body.profile, req.body.attirbute)
})

router.get('/:session', (req, res) => {
    var params = req.params;
    console.log(params);
   
   res.send(params.session);
})

module.exports = router