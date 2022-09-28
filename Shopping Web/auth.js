const fs = require('fs')
const mongo = require("/Users/Learn/Desktop/Class Codes/Shopping Web/mongo.js")
let login = false;
let cartArray = []
function isAuth(email,pass){
    return  mongo.getUser(email,pass)
}
function registerUser(data){
    mongo.registerUser(data)
}

function getShopingData(){
   data1 = require("/Users/Learn/Desktop/Class Codes/Shopping Web/d.json")
   return data1.data
}
function isUserLoggedIn(){
    console.log("Login value : ",login)
    return login;
}
function logOut(){
    login = false;
}
function giveCartItems(){
    return cartArray
}
// getShopingData()
module.exports ={isAuth,registerUser,getShopingData,isUserLoggedIn,logOut,giveCartItems}