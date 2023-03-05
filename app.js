const express = require('express');
const app = express();
app.use(express.json())
app.get('/', (req, res) => {
  res.send("MyGreen ^^")
})

app.post('/test', (req, res) => {
  const {name, memo} = req.body
  const title = "Connection Test"
  console.log(title)
  const servertime = new Date().toTimeString();
  const message = `Your name is ${name} and your memo is ${memo}`
  const response = { title, servertime, message };
  res.json(response);
})

module.exports = app