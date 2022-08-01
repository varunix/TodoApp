const express = require('express');
const db = require('./config/mongoose.js');
const Todo = require('./model/todo');

const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('assets'));

app.get('/', (req, res)=>{
    res.render('home', {
        title: "Home"
    });
});

app.post('/task-list', function(req, res){
    return res.redirect('back');
});

app.listen(port, function(err){
    if(err){
        console.log("Failed to load server");
    }

    console.log("Server is online");
});