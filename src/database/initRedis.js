const { createClient } = require('redis')

const client = createClient({
})

const createConnection = async ()=>{
	await client.on('error', err=>{
	}).connect()

	return 'okay'
}


module.exports = { createConnection, client }

