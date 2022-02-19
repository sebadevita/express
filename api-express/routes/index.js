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

router.get("/users/major", (req, res) => {
  const usersMajors = users.filter((user) => user.age > 18)
  res.json(usersMajors)
})

router.get("/users/minor", (req, res) => {
  const usersMinors = users.filter((user) => user.age < 18)
  res.json(usersMinors)
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
