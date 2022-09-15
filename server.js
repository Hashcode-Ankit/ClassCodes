// class car{
//     constructor(){
//         this.CarName = "Nissan"
//         this.YearBuild = 2019
//     }
//    howOld(){
//         return 2022 - this.YearBuild
//     }
// }
// class wheels extends car{
//     constructor(){
//         super()
//         this.NumOfWheels = 4
//     }
//     AgeOfWheels(){
//         return this.howOld() +" "+ this.CarName
//     }
// }

// let w = new wheels

// console.log(w.AgeOfWheels())


http = require('http')

let server = function(req,res){
    res.writeHead(404)
    res.end("Hello from Ankit")
}

let s1 = http.createServer(server)

s1.listen(8080)


console.log("server is listening ")