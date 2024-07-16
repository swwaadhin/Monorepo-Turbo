import express from "express"

const app=express();
import { BACKEND_URL } from  "@swadhin/common/config";
console.log(BACKEND_URL);
app.get("/",(req,res)=>{
    res.json({
        message:"hello world",
    })
})

app.listen(3000);