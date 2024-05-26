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