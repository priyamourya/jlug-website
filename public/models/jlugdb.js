const express=require("express");
const mongoose=require("mongoose");
const dbSchema=new mongoose.Schema({
    name:{
        type:String,
       required:true
    },
    email:{
        type:String,
        required:true
    }
})

//creating collections
const register=new mongoose.model("jlugDb",dbSchema);
module.exports=register;