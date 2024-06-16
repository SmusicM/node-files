const fs = require('fs');

//fs.readFile('one.txt','utf8',(err,data) =>{
//    if(err){
//        console.log("Error:",err)
//        process.kill(1)
//    }
//    console.log(data)
//})

const argv =process.argv
const txtfile = process.argv[2]
for(let i = 0; i<argv.length;i+=1){
   console.log(i,argv[i])
}



function cat2(txtfile){
    fs.readFile(txtfile,'utf8',(err,data) =>{
    if(err){
        console.log("Error at cat2 readfile:",err)
        console.log("Error code at cat2:",err.code)
        process.kill(1)
    }
    console.log(data)
    console.log(txtfile)
    return data
})
}
//cat2(txtfile)


module.exports = cat2
    
    
  

