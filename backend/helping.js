const fs = require("fs")

function checkPassword(name,pass){
   data = require('/Users/Learn/Desktop/backend/data.json')
   if(data[name]===pass){
    console.log("User is Ok")
    return true
   }else{
    console.log("Incorrect Pass")
    return false
   }
}
function registerUser(name,pass){
    let obj=require("/Users/Learn/Desktop/backend/data.json")
     obj[name] = pass
    let js = JSON.stringify(obj)
    console.log(js)
    fs.writeFile("/Users/Learn/Desktop/backend/data.json",js,function(){
        console.log("Data is entered in file")
    })
    console.log("User Registered")
}

module.exports={checkPassword,registerUser}