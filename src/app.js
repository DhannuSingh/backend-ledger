const express = require('express')
const cookieParser = require('cookie-parser')

const authRouter = require('./routes/auth.routes')

const app = express() /* creating the server */



app.use(express.json()) /* This middleware is use for express server can read the data coming from req.body */
app.use(cookieParser())

app.use("/api/auth", authRouter)



module.exports = app