const express = require("express")
const app = express()

app.get('/', (req, res)=>{
	return res.send('okay')
})

app.listen(8000)
