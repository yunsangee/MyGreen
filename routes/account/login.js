const express = require('express')
var router = express.Router()

router.post('/', (req, res) => {
    console.log(req.body.id, req.body.password)
})

module.exports = router