const express = require('express')
const path = require('path')
const auth = require('/Users/Learn/Desktop/Class Codes/Shopping Web/auth.js')
const bodyParser = require('body-parser')
let app  = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/',function(req,res){
    res.render(path.join(__dirname,"/template/login.hbs"))

})
app.post('/',function(req,res){
    if(auth.isAuth(req.body.email,req.body.pass)){
       console.log("user is Authorised")
       data = auth.getShopingData()
    res.render(path.join(__dirname,"/template/shopping.hbs"),{data:data})

      }else{
          console.log("user is not authorized")
      }
})
app.get('/register',function(req,res){
    res.render(path.join(__dirname,"/template/register.hbs"))
})
app.post('/register',function(req,res){
    auth.registerUser(req.body.email,req.body.pass)
    res.render(path.join(__dirname,"/template/login.hbs"))
})

app.get('/shoping',function(req,res){ 
    if(auth.isUserLoggedIn()==true){
        data = auth.getShopingData()
        console.log(auth.isUserLoggedIn)
    res.render(path.join(__dirname,"/template/shopping.hbs"),{data : data})
    }else{
        res.render(path.join(__dirname,"/template/404.hbs"))
    }
})
app.get('/logout',function(req,res){
    auth.logOut();
    res.render(path.join(__dirname,"/template/login.hbs"))

})
app.listen(8080)
console.log("Server Started")