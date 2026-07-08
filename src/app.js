const express = require('express')
const cookieParser = require('cookie-parser')



const app = express() /* creating the server */



app.use(express.json()) /* This middleware is use for express server can read the data coming from req.body */
app.use(cookieParser())

/**
 * -Routes required
 */

const authRouter = require('./routes/auth.routes')
const accountRouter = require('./routes/accoount.routes')


/**
 * - Use Routes
 */
app.use("/api/auth", authRouter)
app.use("/api/accounts", accountRouter)



module.exports = app