const axios = require('axios');
const fs = require('fs');
const argv =process.argv
//index 2 because our arg input is at index 2 0-2
const urlinput = process.argv[2]
const txtfile = process.argv[3]
const cat2 = require('./step1')
//so i can see argvs below

for(let i = 0; i<argv.length;i+=1){
    console.log(i,argv[i])
 }

//checks if command line arg is a url.
function isurl(s){
    try{
       new URL(s);
        return true
    }catch(err){
        console.log("Is not a URL at isurl",s)
        //cat2(urlinput)
      return false
    }
}


//async function to fetch data from inputed url
       async function webCat(urlinput){
        try{
            let res = await axios.get(`${urlinput}`)
                   console.log(res.data)
                   console.log(res.status) 
                  return res
            }catch(e){
          console.log('Error with url:',e.code,'Response error: ',e.response.status)
          console.log('Response error: ',e.response.status)
            }
            
        }
    
    
 //first reads file at (urlinput) (bad naming i know i use this input for url and file) arg index[2] ,
 //takes that content read into writefile along with new file name arg(argv[3])in command line and makes that the contents of that new file.
 //can be called in command line like  **node step3.js one.txt new09.txt --out** one.txt is file being read,
 // new10.txt is the file being created while one.txt contents is added to the new10.txt file
        function catWrite(txtfile){
           // TODO should make it be able to call cat2 for reading
            //cat2(urlinput,'utf8',(err1,data1)=>{
            fs.readFile(urlinput,'utf8',(err1,data1)=>{
                console.log(data1)
                
               if(err1){
                console.log("error with reading file to be copied into new file")
               }
               //takes data1 aka files contents and write it into our new file aka textfile
                fs.writeFile(txtfile,data1,'utf8',(err,data) =>{
                    
                 if(err){
                     console.log("Error:",err)
                     console.log("Error:",err.code)
                     process.kill(1)
                 }
                 console.log(data)
                 console.log(txtfile)
                 
             })
            })
        }

//First tries to get inputed url from command lines data,takes that data and writes file with it ,along with txtfile our command line argv for the new created file name.
//takes res.data and makes it the contents of that newfile (txtfile) **node step3.js http://google.com new10.txt --out**

        async function webCatWrite(txtfile){
            try{
                res = await webCat(urlinput)
                console.log("HERE IS RES DATA",res.data)
                fs.writeFile(txtfile,res.data,'utf8',(err,data) =>{
                   
                 if(err){
                     console.log("Error:",err)
                     console.log("Error:",err.code)
                     process.kill(1)
                 }
                 console.log(data)
                 console.log("Data from url going into file: ",txtfile)
             })
                }catch(e){
                 console.log('Error with url:',e.code,'Response error: ',e.response.status)
                 console.log('Response error: ',e.response.status)
              
                }
            }
        
/////////////////////////////////////////////////////////////////
//For choosing which functions to use based on command line args
        if(argv.includes('--out') && !isurl(urlinput)){
          catWrite(txtfile)
        }else if(argv.includes('--out')){
            webCatWrite(txtfile)
          console.log ("hey there url")
        }
        //else for our cat2 and webcat function without --out arg
        else{
            if(isurl(urlinput)){ 
                webCat(urlinput)
           }else{
               cat2(urlinput)
           }
        }



        module.exports = {
            webCat:webCat
           }
   