const axios = require('axios');
const fs = require('fs');
const argv =process.argv
//index 2 because our arg input is at index 2 0-2
const urlinput = process.argv[2]
const cat2 = require('./step1')

for(let i = 0; i<argv.length;i+=1){
    console.log(i,argv[i])
 }


function isurl(s){
    try{
       new URL(s);
        return true
    }catch(err){
        console.log("Is not a URL",s)
        //cat2(urlinput)
      return false
    }
}

    


       async function webCat(urlinput){
        try{
            let res = await axios.get(`${urlinput}`)
                   console.log(res.data)
                   console.log(res.status) 
            }catch(e){
          console.log('Error with url:',e.code,'Response error: ',e.response.status)
          console.log('Response error: ',e.response.status)
        }
    }
    
    
        if(isurl(urlinput)){ 
             webCat(urlinput)
        }else{
            cat2(urlinput)
        }
   

 
        module.exports = {
            webCat:webCat
           }
   


/////////////////////////////////////////////////////////////////
//async function webCat(){
//    try{
//        let res = await axios.get(`${urlinput}`)
//        console.log(res.data)
//    }
//    catch(e){
//      console.error('Error with url:',e)
//    }
//    
//}
//webCat(urlinput)
///////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
//async function webCat(urlinput){
//    try{
//        let res = await axios.get(`${urlinput}`)
//               console.log(res.data)
//               console.log(res.status)
//               
//        }
//        
//    catch(e){
//      console.log('Error with url:',e.code,'Response error: ',e.response.status)
//      console.log('Response error: ',e.response.status)
//      
//    }
//    
//}
//webCat(urlinput)
////////////////////////////////////////////////////////////////////////////////////////