"use strict";

const express = require('express')

const app = express()

require('dotenv').config()

// asyncErrors to errorHandler:

require('express-async-errors')

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

// SessionCookies:
// http://expressjs.com/en/resources/middleware/cookie-session.html
// https://www.npmjs.com/package/cookie-session
//* $ npm i cookie-session
const session = require("cookie-session")
app.use(session({ secret: process.env.SECRET_KEY || 'secret_keys_for_cookies' }))

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// res.getModelList():
app.use(require('./src/middlewares/findSearchSortPage'))

const bodyParser = require('body-parser');

app.use(bodyParser.json())

// routes:

app.use('/',require('./src/routes'))

// RUN SERVER:

const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000

app.listen(PORT, HOST, () => console.log(`server running on http://${HOST}:${PORT}`))