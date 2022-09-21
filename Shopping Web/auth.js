const fs = require('fs')


function isAuth(email,pass){
    data = require("/Users/Learn/Desktop/Shopping Web/user.json")
    if(data[email]==pass){
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
   data1 = require("/Users/Learn/Desktop/Shopping Web/d.json")
   return data1.data
}

// getShopingData()
module.exports ={isAuth,registerUser,getShopingData}