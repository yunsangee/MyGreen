const express = require('express')
const db = require('../../db/database')

var router = express.Router()

router.post('/', (req, res) => {
<<<<<<< refs/remotes/origin/ys
    console.log(req.body.id, req.body.password, req.body.name, req.body.birth, req.body.gender, req.body.email)
=======
    if (!req.body.id || !req.body.password || !req.body.name || !req.body.email || !req.body.birth) {
        console.log("There are spaces missing")
        return res.status(400).send("Bad Request")
    }

    user.create({
        id: req.body.id,
        password: req.body.password,
        name: req.body.name,
        email: req.body.email,
        birth: req.body.birth
    }, (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).send("Server Error")
        }
        console.log(data)
        res.send("Account Created! " + req.body.id);
    });
>>>>>>> local
})

module.exports = router