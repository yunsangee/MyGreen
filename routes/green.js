const express = require('express')
const diary = require("./green/diary")
const memo = require("./green/memo")
var router = express.Router()

router.use('/diary', diary)
router.use('/memo', memo)

router.post('/', (req, res) => {
    // registerGreen code here
})

router.get('/', (req, res) => {
    // viewGreen code here
})

module.exports = router