const express = require('express')
const user = require('../../db/models/user')

var router = express.Router()
router.post('/', (req, res) => {
    const login = async (id, password) => {
        try {
          const status = await user.findOne({ 
            id: id,
            password: password
         })
         .exec();
        if (!status) {
            console.log("ID not found");
        }
        return status
        } catch (err) {
            console.error(err);
        }
    };

    login(req.body.id, req.body.password)
    .then(status => {
        if (status) {
            res.send("GOOOD!")
    .then(result => {
        if (!result) {
            res.status(406).send("Not Good")
        }
        else {
            res.status(406)
            res.send("GOOOD!")
        }
    })
})
module.exports = router
