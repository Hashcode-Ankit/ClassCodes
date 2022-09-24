const express = require("express")
const path = require("path")
const bodyParser = require('body-parser')
const helper = require('/Users/Learn/Desktop/backend/helping.js')
const { Console } = require("console")

let app = express()

app.use(bodyParser.urlencoded({ extended: false })) 
app.get("/",async function(req,res){
    let arr = ["Fortuner","Toyota","Tata","Mahindra"]
   res.render(path.join(__dirname,"/templates/home.hbs"),{data : arr})
})
app.get("/register",async function(req,res){
   res.render(path.join(__dirname,"/templates/register.hbs"),{data : ""})
})
app.post("/",(req,res)=>{
    console.log("Name entered : ",req.body.myName," My Pass : ",req.body.password)
  if(helper.checkPassword(req.body.myName,req.body.password)){
    res.render(path.join(__dirname,"/templates/success.hbs"),{data:req.body.myName})
  }else{
    res.render(path.join(__dirname,"/templates/err.hbs"),{data:req.body.myName})
  }
})
app.post("/register",function(req,res){
    helper.registerUser(req.body.myName,req.body.password)
    res.render(path.join(__dirname,"/templates/home.hbs"),{data:""})
})
app.listen(8080)
console.log("Server started")