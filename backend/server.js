
const express = require("express")

const app = express()

const fetch = require("node-fetch"); 

async function fetchData() {
    const response = await fetch('https://www.getpostman.com/collections/66c45e6146e3d7cbe41b');
    const data = await response.json();
    console.log(data); 
    return data
  }

 fetchData()


//home page 
app.get("/" , function(req,res){       
    res.send("Home")     
})

//login route 
app.get("/login",function(req,res){
res.send("login page")
})


app.listen(3000,function(){
    console.log("the server os running at port 3000")
})

