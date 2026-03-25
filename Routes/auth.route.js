const route = require("express").Router()

// Required UserModel
const userModel = require("../Models/user")

route.post("/create", (req, res) => {
    const {username, email, password, age} = req.body;

    const user = userModel.create({
        username, 
        email,
        password,
        age
    })
    res.send("Account Created Successfully!")
}) 

module.exports = route;