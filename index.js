const express=require ('express')
const cors=require('cors')
var app=new express()
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.post('/adduser',(req,res)=>{
    res.header("Access-Control-Allow-Origin",'*')
    res.header("Access-Control-Allow-Methods:GET,PUT,POST,PATCH,DELETE,OPTIONS")
    var x=req.body.name
    var s=req.body.salary
    var y=req.body.sex
    var tax=0;
    if(y=="Female"){
        tax=.1*s
    }
    if(y=="Male"){
        tax=.25*s
    }console.log(tax)

    res.send({'tax':tax})
    
})

app.listen(3002,()=>{
    console.log("running successfully")
})