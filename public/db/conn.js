const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/jlug",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection sucessfull");
}).catch(()=>{
    console.log("No connection");
})