const mongoose = require("mongoose")

const connection = () => {
    mongoose.connect("mongodb://localhost:27017")
        .then(() => {
            console.log("Connect Success!")
        })
}

module.exports = connection