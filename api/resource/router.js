// build your `/api/resources` router here
const express = require("express")
const Model = require("./model")
const router = express.Router()

router.get("/", (req, res) => {
  Model.getAll()
    .then((resource) => {
      res.status(200).json(resource)
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
})

router.post("/", (req, res) => {
  Model.make(req.payload).then((resource) => {
    res
      .status(201)
      .json(resource)
      .catch((err) => res.status(500).json({ message: err.message }))
  })
})

module.exports = router
