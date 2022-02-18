const express = require("express")
const router = express.Router()
const users = require("../public/data/users.json")

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" })
})

router.get("/users", (req, res) => {
  res.json(users)
})

router.get("/users/quantity", (req, res) => {
  res.json(users.length)
})

router.post("/users", (req, res) => {
  const { body } = req

  if (body.name) {
    users.push(body)
    return res.sendStatus(201)
  } else {
    return res.sendStatus(400)
  }
})

module.exports = router
