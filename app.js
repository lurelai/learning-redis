const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const { createConnection, client } = require('./src/database/initRedis')

createConnection()

app.get('/:id/:password', async (req, res)=>{
	const { id, password } = req.params


	const result = await client.get(`session:${id}`)

	if(result !== null)
		return res.send('session defined')

	client.set(`session:${id}`, password)
	return res.send('okay')
})

app.listen(8000)

