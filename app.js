const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const { createConnection } = require('./src/database/initRedis')

createConnection()

app.get('/', (req, res)=>{

})

app.listen(8000)

