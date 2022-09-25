const mongoose = require('mongoose')
let Schema = mongoose.Schema;
let schema = new Schema({
   "email" : String,
   "password" : String,
})

let User;
function initilize(){
   let db = mongoose.createConnection('mongodb+srv://ankit:ZIOD32xsSiAiQm9L@cluster0.6rbqcoa.mongodb.net/test')
  return new Promise((resolve, reject) => {
    
  db.on('error',(err)=>{
      console.log("Error :",err)
      reject()
   })
   db.once('open', ()=>{
      User = db.model("users",schema)
      console.log("User Schema Created");
      resolve();
   })
})
}

function registerUser(userData){
    console.log(userData)
    initilize().then(()=>{
        let user1 = new User(userData)
        console.log(user1)
        user1.save((err)=>{
            if(err)
            {console.log("The user is already present")}
            else if(err){
                console.log("error is creating user")
            }
        })
    })
}

module.exports = {registerUser}
