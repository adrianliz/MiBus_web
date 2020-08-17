require('dotenv').config();
const express = require('express')

const app = express()
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index')
})

const APP_PORT = process.env.APP_PORT
app.listen(APP_PORT, () => {
  console.log(`Server running on ${APP_PORT}`);
})