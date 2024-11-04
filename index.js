const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()

app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'ejs')
app.use(express.static('public'))



app.get('/', (req,res)=>{
    res.render('index')
})


module.exports = app;