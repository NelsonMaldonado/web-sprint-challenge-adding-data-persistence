// build your server here and require it from index.js
const express = require("express")
const server = express()
const routerProject = require("./project/router")

server.use(express.json())
server.use("/api/projects", routerProject)

module.exports = server
