const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
})

router.get('/robots.txt', function (req, res) {
  res.sendFile(path.join(__dirname + '/robots.txt'))
})

router.get('/adminpage.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/adminpage.html'))
})

app.use('/', router)
app.listen(process.env.port || 3000)

console.log('Running at Port 3000')
