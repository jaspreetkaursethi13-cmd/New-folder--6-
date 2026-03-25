const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000


// Required Auth Route
const authRoute = require("./Routes/auth.route")

// Required DB
const db = require("./Config/db")

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.set("view engine", "ejs")
app.use(authRoute())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
