// build your `/api/projects` router here
const express = require("express")
const Model = require("./model")

const router = express.Router()

router.get("/", (req, res) => {
  Model.getAll()
    .then((project) => {
      res.status(200).json(project)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

module.exports = router
