const mongoose=require('mongoose');
const express=require("express")
const app=express()
const cors=require("cors")
app.use(cors())
const port=8000;
mongoose.connect('mongodb+srv://dexter:dexteract007@cluster0.h7bii.mongodb.net/data?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(() =>{
  console.log('connected to db')
})

const loginSchema = new mongoose.Schema({
    year:String,
    
    
    
    });
    var datas = mongoose.model( 'datas',loginSchema)
    
app.get("/",(req,res)=>{

const a =  datas.find().then((data)=>{
// res.json(data)
res.status(200).json({data})

})



})

app.listen(port,(req,res)=>{

    console.log("conected at port 8000")
})
