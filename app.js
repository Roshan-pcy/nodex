 

// var http=require('http')
// http.createServer(function(req,res){

//     res.write('Hellow world')
//     res.end()
// }).listen(8000) 

// cal=require('./cal.js')
// output=cal.add(10,20)
// output2=cal.sum(10,20)
// console.log("out put is "+ output)
// console.log("out put is "+ output2)

//reading file from cal.js

var file=require('fs')
file.readFile('cal.js','utf8',function(error,data){
    console.log(data)
})