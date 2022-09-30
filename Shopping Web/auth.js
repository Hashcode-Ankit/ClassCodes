const fs = require('fs')
const mongo = require("/Users/Learn/Desktop/Class Codes/Shopping Web/mongo.js")
let login = false;
let cartArray = []
let data =[]
function isAuth(email,pass){
    login=true;
    return  mongo.getUser(email,pass)
}
function registerUser(data){
    mongo.registerUser(data)
}

function getShopingData(){
   data1 = require("/Users/Learn/Desktop/Class Codes/Shopping Web/d.json")
   data= data1.data
   return data1.data
}
function isUserLoggedIn(){
    console.log("Login value : ",login)
    return login;
}
function logOut(){
    login = false;
}
function getCartItems(){
    return cartArray
}
function addItem(id){
    for(let i=0;i<cartArray.length;i++){
        if(cartArray[i].id==id){
            return 
        }
    }
    for(let i=0;i<data.length;i++){
        if(data[i].id==id){

            cartArray.push(data[i])
        }
     }
}
function removeItem(id){
    for(let i=0;i<cartArray.length;i++){
        if(cartArray[i].id==id){
                cartArray.splice(i,1)
        }
    }
}
function price(){
    price =0
    for(let i=0;i<cartArray.length;i++){
       price += cartArray[i].price
    }  
    return price
}

module.exports ={isAuth,registerUser,getShopingData,isUserLoggedIn,logOut,getCartItems,addItem,removeItem,price}