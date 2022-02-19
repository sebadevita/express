const express = require("express")
const router = express.Router()
const users = "../public/data/users.json"
const UserContoller = require("../controllers/UserController")

const adminData = {
  name: "seba",
  password: "password123",
}

function isAdmin(req, res, next) {
  const { headers } = req

  const auth = headers.authorization
  const base64Data = auth.split(" ")[1]
  const data = Buffer.from(base64Data, "base64").toString()

  const name = data.split(":")[0]
  const password = data.split(":")[1]
  console.log(name)

  if (name == adminData.name && password == adminData.password) {
    next()
  }

  return res.sendStatus(401)
}

router.get("/user", isAdmin, (req, res) => {
  UserContoller.getUsers(req, res)
})

router.get("/user/quantity", (req, res) => {
  UserContoller.usersQuantity(req, res)
})

router.get("/user/major", (req, res) => {
  UserContoller.majorAge(req, res)
})

router.get("/user/minor", (req, res) => {
  UserContoller.minorAge(req, res)
})

router.post("/user", (req, res) => {
  UserContoller.createUser(req, res)
})

router.get("/user/:id", (req, res) => {
  UserContoller.getUserById(req, res)
})

module.exports = router
