const express = require('express')
const diary = require("./green/diary")
const memo = require("./green/memo")
var router = express.Router()

router.use('/diary', diary)
router.use('/memo', memo)

router.post('/', (req, res) => {
    console.log(req.body.session, req.body.plant_name, req.body.profile, req.body.attirbute)
})

router.get('/', (req, res) => {
    console.log(req.body.session)
})

module.exports = router