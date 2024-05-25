"use strict";

const express = require('express')

const app = express()

require('dotenv').config()

// asyncErrors to errorHandler:

require('express-async-errors')

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:

const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000

app.listen(PORT, HOST, () => console.log(`server running on http://${HOST}:${PORT}`))