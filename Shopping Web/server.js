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
    auth.isAuth(req.body.email,req.body.password).then((data)=>{
        console.log("user is authorised")
        res.redirect('/shoping')
    }).catch((err)=>{
        console.log("not authorised",err)
        res.render(path.join(__dirname,"/template/404.hbs"))
    })
})
app.get('/register',function(req,res){
    res.render(path.join(__dirname,"/template/register.hbs"))
})
app.post('/register',function(req,res){
    auth.registerUser(req.body)
    res.render(path.join(__dirname,"/template/login.hbs"))
})

app.get('/shoping',function(req,res){ 
    if(auth.isUserLoggedIn()==true){
        data = auth.getShopingData()
    res.render(path.join(__dirname,"/template/shopping.hbs"),{data : data})
    }else{
        res.render(path.join(__dirname,"/template/404.hbs"))
    }
})
app.get('/logout',function(req,res){
    auth.logOut();
    res.redirect("/")
})
app.get('/addItem/:id',function(req,res){
    let idOfProduct = req.params.id
    // console.log(idOfProduct)
    auth.addItem(idOfProduct)
    res.redirect('/shoping')

})
app.get('/remove/:id',function(req,res){
    let idOfProduct = req.params.id
    auth.removeItem(idOfProduct)
    res.redirect('/cart')

})
app.get('/cart',function(req,res){
    data = auth.getCartItems()
    price = auth.price()
    // console.log(data)
   res.render(path.join(__dirname,'/template/cart.hbs'),{cartItems: data,price:price})
})
app.listen(8080)
console.log("Server Started")