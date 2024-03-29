const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"))


app.get("/",(req,res)=>{
    res.render("home");
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/create",(req,res)=>{
    res.render("create");
});

app.listen(port, () => {
  console.log(`Server is line on port ${port}...`);
});
