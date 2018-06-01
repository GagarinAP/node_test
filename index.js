import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
	res.send({hello: 'Hello World'})
})

app.get('/:id', (req, res) => {
	res.send({params: req.params.id, query: req.query})
})

app.post('/', (req, res) => {
	res.json(req.body)
})

app.listen(3000)