const express = require("express"); 
const app = express(); 

app.set('view engine', 'ejs');

app.listen(5000, () =>{ console.log("Server started")});

app.get("/", (req, res) =>{ 
    res.send("<h1>Welcome to the Home page</h1>"); 
}); 

app.get("/about", (req, res) =>{ 
    res.send("<h1>Welcome to the About page</h1>"); 
}); 