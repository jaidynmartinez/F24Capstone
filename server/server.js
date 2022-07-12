require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed} = require('./seed.js')

app.use(express.json())
app.use(cors())

const {getUserInfo, updateInfo, getBunny} = require('./controller')

app.post('/seed', seed)

app.get('/user', getUserInfo);
app.put('/user', updateInfo);

app.get('/adoptions', getBunny)


app.listen(5500, () => console.log('Server running on 5500'))

