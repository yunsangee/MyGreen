const express = require('express');

const index = require('./routes/index')
const test = require('./routes/test')
const createAccount = require('./routes/createAccount')
const login = require('./routes/login')
const addGreen = require('./routes/addGreen')
const viewGreen = require('./routes/viewGreen')
const writeDiary = require('./routes/writeDiary')
const viewDiary = require('./routes/viewDiary')
const registerGreen = require('./routes/registerGreen')
const sendStatus = require('./routes/sendStatus')

const app = express();

app.use(express.json())

// for Mobile Application
app.use('/', index)
app.use('/test', test)
app.use('/login', login)
app.use('/addGreen', addGreen)
app.use('/viewGreen', viewGreen)
app.use('/writeDiary', writeDiary)
app.use('/viewDiary', viewDiary)
//

// for IOT vase
app.use('/registerGreen', registerGreen)
app.use('/sendStatus', sendStatus)
// 

module.exports = app