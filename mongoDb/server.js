const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongodbFile = require('/Users/Learn/Desktop/mongoDb/mongo.js')
let app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/',function(req,res){
    res.render(path.join(__dirname,'/template/login.hbs'))
})
app.get('/register',function(req,res){
    res.render(path.join(__dirname,'/template/register.hbs'))
})
app.post('/register',function(req,res){
    mongodbFile.registerUser(req.body)
   res.redirect('/')
})
app.listen(8080)
console.log("Server Started")