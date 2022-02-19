const express = require("express")
const router = express.Router()
const users = "../public/data/users.json"
const UserContoller = require("../controllers/UserController")

router.get("/users", (req, res) => {
  UserContoller.getUsers(req, res)
})

router.get("/users/quantity", (req, res) => {
  UserContoller.usersQuantity(req, res)
})

router.get("/users/major", (req, res) => {
  UserContoller.majorAge(req, res)
})

router.get("/users/minor", (req, res) => {
  UserContoller.minorAge(req, res)
})

router.post("/users", (req, res) => {
  UserContoller.createUser(req, res)
})

router.get("/users/:id", (req, res) => {
  UserContoller.getUserById(req, res)
})

module.exports = router
