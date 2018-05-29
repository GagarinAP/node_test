var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function (req, res) {
	res.send({hello: 'Hello World'})
})

app.post('/', function (req, res) {
	res.json(req.body)
})

app.listen(3000)