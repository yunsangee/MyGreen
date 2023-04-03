const express = require('express')
const userModel = require('../../db/models/user')

var router = express.Router()
router.post('/', (req, res) => {
    const login = async (id, password) => {
        try {
          const status = await userModel.findOne({ 
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
    .then(result => {
        if (!result) {
            res.status(406).send("Not Good")
        }
        else {
            req.session.userid = req.body.id
            console.log(`session: ${JSON.stringify(req.session)}`)
            res.send("Good")
        }
    })
})
module.exports = router
