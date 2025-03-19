
const express = require('express')
const app = express()
const cors = require('cors')
const InquiryModel = require('./InquiryModel')

app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>")
})


app.use(cors())
app.use(express.json())



app.post('/create', async(req,res)=>{
    
    let data =  await InquiryModel(req.body)
    let result = await data.save()
    console.log(result)
    res.json({"message":"Data saved"})

})


app.post('/login', async (req, res) => {
    let { username, password } = req.body;
  
    
    let data = await InquiryModel.findOne({ username, password });
    // JSON.stringify(data)
    // console.log(data)
    // JSON.parse(data)
  
    
      res.json(data);

});
app.post('/forg', async (req, res) => {
    let { username, mobile } = req.body;
  
    
    let data = await InquiryModel.findOne({ username, mobile });
    // JSON.stringify(data)
    // console.log(data)
    // JSON.parse(data)
  
    
      res.json(data);

});


app.listen(3333,()=> console.log('server started'))