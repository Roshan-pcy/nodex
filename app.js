 

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
//creating new file and and added console,log("done") if that cal1.js already exits then  what is there before code inside the cal1.js all code replaced with console.log("done")

// file.writeFile('cal1.js','console.log("done")',function(errror){
//     console.log('data saved')
// })

file.writeFile('cal2.js','console.log("done")',function(errror){
    console.log('data saved')
})



//file.appendFile() is used add that code below of line of exiting code 
 //delete the perticular file

 file.unlink('cal2.js',function(error){
    console.log('deleted successfully')
 })