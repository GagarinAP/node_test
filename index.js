import express from 'express'
import bodyParser from 'body-parser'
import api from './api'

const app = express()
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/api', api);

app.get('/', (req, res) => res.send('API is running!'))

app.listen(port)