const fs = require('fs')

let login = false;
function isAuth(email,pass){
    data = require("/Users/Learn/Desktop/Class Codes/Shopping Web/user.json")
    if(data[email]==pass){
        login = true;
        return true;
    }else {
        return false;
    }
}
function registerUser(email,pass){
    data = require("/Users/Learn/Desktop/Shopping Web/user.json")
    data[email] = pass;
    obj = JSON.stringify(data)
    fs.writeFile("/Users/Learn/Desktop/Shopping Web/user.json",obj,function(){
        console.log("data is entered")
    })
}

function getShopingData(){
   data1 = require("/Users/Learn/Desktop/Class Codes/Shopping Web/d.json")
//    console.log(data1)
   return data1.data
}
function isUserLoggedIn(){
    console.log("Login value : ",login)
    return login;
}
function logOut(){
    login = false;
}
// getShopingData()
module.exports ={isAuth,registerUser,getShopingData,isUserLoggedIn,logOut}