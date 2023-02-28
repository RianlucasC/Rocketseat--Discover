const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    const items = [
        {
            title: "D",
            message: 'esenvolver'
        },
        {
            title: "E",
            message: "JS"
        },
        {
            title: "M",
            message: "uito fácil"
        },
        {
            title: "A",
            message: "morzinho"
        },
        {
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "uper"
        }     
    ]
    res.render("pages/index", {
        qualitys: items,
    });
})

app.get("/sobre", function(req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log("rodando");