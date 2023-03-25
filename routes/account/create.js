const express = require('express')
const user = require('../../db/models/user')

var router = express.Router()

router.post('/', (req, res) => {

    user.create({
        id: req.body.id,
        password: req.body.password,
        name: req.body.name,
        email: req.body.email,
        birth: req.body.birth    
    })

    if(!req.body.id || !req.body.password || !req.body.name || !req.body.email || !req.body.birth){
        res.send("There are spaces missing")
    }
    else{
    console.log(req.body.id, req.body.password, req.body.name, req.body.birth, req.body.email)
    res.send("Account Created! " + req.body.id)
    }
})

module.exports = router
