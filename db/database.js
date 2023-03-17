const mongoose = require('mongoose')
const database = require('../config/database')

//mongoose.connect(database.local + '/my_green')
mongoose.connect(database.remote)
.then(() => console.log("DB Connected"))
.catch(error => console.log(error))

module.exports = mongoose