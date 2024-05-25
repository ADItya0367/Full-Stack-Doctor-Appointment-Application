const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 3000
const app = express();

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://Aditya:abcde12345@nodejs.euh2mao.mongodb.net/?retryWrites=true&w=majority&appName=NodeJs').then((d)=>{
    console.log('Connected to MongoDB')

}).catch(err => console.log(err))

app.listen(port, () => {
    console.log('Someone is Listning to us on port ',port)
})