const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express()
app.use(cors());
app.use(express.json());

 app.use(express.urlencoded({extended:false}))


// app.get('',(req,res)=>{
//     res.sendFile(__dirname+"/index.html")
// })
// app.post('/',(req,res)=>{
//     const n1 = Number(req.body.num1)
//     const n2 = Number(req.body.num2)
//     const add = n1 + n2
//     res.send("the value is"+ add)
// })
app.post('/calculate/:operation', async function (req, res) {
   const {number1, number2} = req.body;
   console.log(number1 ,number2);
   var result;
   var operation = req.params.operation 
   switch(operation){
       case "add":
           result = number1 + number2;
        break;
        case "multiply":
            result = number1*number2;
        break;
        default:
            result = null;
   }
    res.status(200).send({data:result});
   // res.sendStatus(200).send(result); 
    
  })
  
 
app.listen(3000,(res)=>{
    console.log("Server start at 3000 port");
})