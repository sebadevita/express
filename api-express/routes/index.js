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

module.exports = router
