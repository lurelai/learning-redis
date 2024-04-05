require('dotenv').config()

const { createClient } = require('redis')

const client = createClient({
	url: `redis://${process.env.REDIS_USER}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_LINK}:${process.env.REDIS_PORT}`
})

const createConnection = async ()=>{
	await client.on('error', err=>{
	}).connect()

	return 'okay'
}


module.exports = { createConnection, client }

