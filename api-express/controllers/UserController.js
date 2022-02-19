const users = require("../public/data/users.json")

const getUsers = (req, res) => {
  res.json(users)
}

const getUserById = (req, res) => {
  const { params } = req
  const user = users.find((user) => {
    return user.id == params.id
  })

  if (user) {
    return res.json(user)
  } else {
    return res.sendStatus(404)
  }
}

const usersQuantity = (req, res) => {
  res.json(users.length)
}

const createUser = (req, res) => {
  const { body } = req

  if (body.name) {
    users.push({
      id: users.length + 1,
      name: body.name,
      username: body.username,
      age: body.age,
    })
    return res.sendStatus(201)
  } else {
    return res.sendStatus(400)
  }
}

const majorAge = (req, res) => {
  const usersMajors = users.filter((user) => user.age > 18)
  res.json(usersMajors)
}

const minorAge = (req, res) => {
  const usersMinors = users.filter((user) => user.age < 18)
  res.json(usersMinors)
}

module.exports = {
  getUsers,
  getUserById,
  usersQuantity,
  createUser,
  majorAge,
  minorAge,
}
