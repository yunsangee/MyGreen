const express = require('express')
var router = express.Router()

router.post('/test', (req, res) => {
    const {name, memo} = req.body
    const title = "Connection Test"
    console.log(title)
    const servertime = new Date().toTimeString();
    const message = `Your name is ${name} and your memo is ${memo}`
    const response = { title, servertime, message };
    res.json(response);
})

module.exports = router