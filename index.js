var figlet = require("figlet");
const express=require("express");
const app=express();
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))
app.listen(8080,()=>{
    console.log("server is started");
})

app.get("/home",(req,res)=>{
    figlet('sitaram!', (err, data) => {
        if (err) {
            console.error('Error generating Figlet text:', err);
            return res.status(500).send('Error generating Figlet text');
        }
        // Render the EJS template and pass the Figlet output
        res.render('home.ejs', { figletOutput: data });
    });
})

