const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res)=>{
    res.render('home', {
        title: "Home"
    });
});

app.listen(port, function(err){
    if(err){
        console.log("Failed to load server");
    }

    console.log("Server is online");
});