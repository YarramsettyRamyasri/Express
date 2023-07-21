var express =require("express");
var imp=require("./module.js");
const app=express();
const port=120;
app.get("/",(req,res)=>{
    res.send(imp.myDate());
});
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});