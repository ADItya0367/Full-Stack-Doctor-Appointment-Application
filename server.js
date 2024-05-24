const express = require('express');
const { default: Login } = require('./client/src/pages/Login');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000

app.get('/login', (req, res) => {
    <Login/>
})

app.listen(port, () => {
    console.log('Someone is Listning to us on port ',port)
})