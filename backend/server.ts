const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Vinicius Perrone')
})

app.get('/password', (req, res) => {
  res.send('Olá ')
})

app.listen(3000)
