const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("../public/db/conn");
const register = require("../public/models/jlugdb");
const port = process.env.PORT || 3000;


//buit in middleware...path
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));
// app.use(express.static(staticPath));

//hbs set as view engine
app.set("view engine", "hbs");

//template engine path
const templatePath = path.join(__dirname, "../template/views");
// const partialsPath=path.join(__dirname,"../template/partials");
app.set("views", templatePath);
// hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/",async  (req, res) => {
    res.render("index", {
        file:'javascriptfile.js',
        style:'style.css'
    });
});    
app.post("/notify",async(req,res)=>{
    let sucess = [];
    const registerPerson = new register({
        name:req.body.myname,
        email: req.body.mymail,
    });
    sucess.push({ text: "Notificiation SucessFull" });
    const registered = await registerPerson.save();
    res.render("index", {
        file:'javascriptfile.js',
        style:'style.css',
        success:sucess
    });
   
});                                        
app.listen(port, () => {
    console.log(`listening to the post ${port}`)});