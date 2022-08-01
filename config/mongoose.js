const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_list');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to db'));

db.once('open', console.log.bind(console, 'Successfully connected to the db'));