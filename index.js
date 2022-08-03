const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/mongoose.js');
const Todo = require('./model/todo');
const moment = require('moment');

const app = express();
const port = 8000;


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('assets'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    // res.render('home', {
    //     title: "Home"
    // });

    Todo.find({}, function(err, newList){
        if(err){
            console.log('Error in fetching the data from the todo list ' + err);
            return;
        }

        return res.render('home', {
            title: 'TodoApp',
            todoList: newList,
            moment: moment,
            portNumber: port
        });
    });
});

app.post('/task-list', function(req, res){
    Todo.create(req.body, function(err, newList){
        if(err){
            console.log('error in creating a todo list '+ err);
        };

        // console.log('***********', newList);

        return res.redirect('back');
    });
});

app.get('/delete-task/', function(req, res){
   let arr = req.query.array.split(",");
   Todo.deleteMany({_id: {$in: arr}}, function(err){
        if(err){
            console.log('error deleting from db '+err);
        }

        return res.redirect('back');
   });

});

app.listen(port, function(err){
    if(err){
        console.log("Failed to load server");
    }

    console.log("Server is online");
});