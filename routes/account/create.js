const express = require('express')
var router = express.Router()

router.post('/', (req, res) => {
    // create code here
    console.log(req.body.id, req.body.password, req.body.name, req.body.birth, req.body.gender, req.body.email)
})

module.exports = router