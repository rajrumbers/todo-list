const express=require("express");
const ejs = require("ejs");

const bodyparser=require("body-parser");

const app=express();

app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

let items=[];



app.get("/",function(req,res){

    let today=new Date();

    let opt={
        weekday:"long",
        day:"numeric",
        month:"long"
        };
        var day=today.toLocaleDateString("en-US",opt);
    res.render("index",{
        kindofday:day ,
        newitem:items
    })

});

app.post("/",function(req,res){
       element=req.body.item;
       items.push(element);
     res.redirect("/");

})

app.listen(3000,function(){
    console.log("started");
})