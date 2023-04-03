const express = require('express');
const session = require('express-session')

const index = require('./routes/index')
const test = require('./routes/test')
const account = require('./routes/account')
const green = require('./routes/green')

const app = express();

app.use(express.json())
app.use(session({
    secret: 'my-secret-key',    // 보안키 노출되면 안됨
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 60 * 1000
    }    // use HTTPS in production
}))

// for Mobile Application
app.use('/', index)
app.use('/test', test)
app.use('/account', account)
app.use('/green', green)
//

// for IOT vase

// 

module.exports = app