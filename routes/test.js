const express = require('express');
const db = require('../db/database')
var router = express.Router()

const testSchema = new db.Schema({
	name: String,
    memo: String
});
const testModel = db.model('good', testSchema)

router.post('/', (req, res) => {
  console.log(`POST!: ${JSON.stringify(req.headers)} ${JSON.stringify(req.body)}`)
    testModel.create({
        name: req.body.name,
        memo: req.body.memo
    })
    console.log(req.body.name, req.body.memo)
    res.send("good")
})

module.exports = router