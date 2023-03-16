const mongoose = require('mongoose')
const database = require('../config/database')

//mongoose.connect(database.local + '/my_green')
mongoose.connect(database.remote + '/my_green')
.then(() => console.log("DB Connected"))
.catch(error => console.log(error))

module.exports = mongoose