var express = require("express");
var path=require("path");
var app = express();
http = require('http')

let server = function(req,res){
    res.writeHead(404)
    res.end("Hello from Ankit")
}
app.get("/", async function(req,res){
let array = ["Ankit","Ankush","Manan","Tushar","Millind"]
res.render(path.join(__dirname,"/views/blog.hbs"),{data: array})

});
app.post("/", function(req,res){
    console.log("Here is data : ",req)
})
app.listen(8080)
console.log("server is listening ")