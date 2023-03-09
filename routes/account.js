const express = require('express')
const login = require("./account/login")
const create = require("./account/create")
var router = express.Router()

router.use('/login', login)
router.use('/create', create)

module.exports = router