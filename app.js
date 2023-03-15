const express = require('express');
const mongoose = require('mongoose')
const database = require('./config/database')

const index = require('./routes/index')
const test = require('./routes/test')
const account = require('./routes/account')
const green = require('./routes/green')

const app = express();

mongoose.connect(database.local)
.then(() => console.log("DB Connected"))
.catch(error => console.log(error))

app.use(express.json())

// for Mobile Application
app.use('/', index)
app.use('/test', test)
app.use('/account', account)
app.use('/green', green)
//

// for IOT vase

// 

module.exports = app