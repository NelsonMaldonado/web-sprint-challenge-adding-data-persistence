// build your server here and require it from index.js
const express =  require('express')
const server = express()

server.get('/',(req,res)=>{
res.status(200).send('first endpoint working')
})

module.exports =  server