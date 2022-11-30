const express = require("express")
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3000;
const path = require("path");


const alert = require('alert');


let connectdb = require("./db/conn")
connectdb()

const Register = require("./models/login")

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path))
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.get("/",(req,res)=>{
    res.render("log")
});

app.get("/reg",(req,res)=>{
    res.render("reg")
});

app.get("/log",(req,res)=>{
    res.render("log")
});

app.get("/HomePage",(req,res)=>{
    res.render("HomePage")
});

app.get('/Articles', (req, res) => {
    res.render('Article')
})
app.get('/Quiz', (req, res) => {
    res.render('Quiz')
})
app.get('/Aboutus', (req, res) => {
    res.render('Aboutus')
})
app.get('/EatingDisorder', (req, res) => {
    res.render('EatingDisorder')
})
app.get('/Addiction', (req, res) => {
    res.render('Addiction')
})
app.get('/Anxiety', (req, res) => {
    res.render('Anxiety')
})
app.get('/Depression', (req, res) => {
    res.render('Depression')
})
app.get('*', (req, res)=>{
    res.render("Error");
});

app.post("/log",async (req,res)=>{
    try{
        const lpassword = req.body.apassword;
        const email = req.body.aemail;    
        const check = await Register.findOne({email:email});
    
    if(check.password === lpassword){
        res.render("HomePage")
       }else{
        alert("Invalid Credentials")
    }

    }
    catch(error){
        res.render("log")
    }
})

app.post("/reg",async (req,res)=>{
    try{

       const password = req.body.password;
       const con_password = req.body.conpassword;
       const name = req.body.name;
       var rn = /^\S\D([^0-9]*)$/;
       var check = 1;
    if (rn.test(name) == false){
        check = 0;
    }
    console.log(check)
    if(con_password === password && check == 1) {
            const User = Register({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                con_password:req.body.conpassword,
            })
            const registered = await User.save();
            res.status(201).render("HomePage");
        }
       else{
            alert("Invalid Input");
            res.render("reg");
       }
    }
    catch(error){
        res.status(400).send(error);
    }
})

app.listen(port,()=>{
    console.log(`Server is running at port number ${port}`);
});
