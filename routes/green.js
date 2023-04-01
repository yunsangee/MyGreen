const express = require('express')
const greenModel = require('../db/models/green')
const userModel = require('../db/models/user')

const diary = require("./green/diary")
const memo = require("./green/memo")
var router = express.Router()

router.use('/diary', diary)
router.use('/memo', memo)

const isValidUser = async (id) => {
    try {
        const status = await userModel.findOne({ 
            id: id
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

router.post('/', (req, res) => {
    console.log(req.session, req.body.plant_name, req.body.profile, req.body.attribute)

    if (!req.session.userid) {  // 세션이 없으면
        res.status(406).send("Unauthorized")
    }
    else if(false) { //!req.body.session || !req.body.plant_name || !req.body.profile || !req.body.attribute){   잠시 비활성화
        res.status(406).send("There are spaces missing")
    }
    else {
        isValidUser(req.session.userid)
        .then(isVaild => {
            if (!isVaild){
                console.log(`${req.session.userid} not found`)
                res.status(406).send("No ID")
                return
            }
            greenModel.create({
                name: req.body.plant_name,
                profile_image: req.body.profile,
                attribute: req.body.attribute
            })

            res.send("Green Created!")
            
        })
    }
})

router.get('/:session', (req, res) => {
    
})

module.exports = router
