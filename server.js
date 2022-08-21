// Importing npm packages for setting up app
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;  

const routes = require('./routes/api');

//const MONGODB_URI = 'mongodb+srv://Operator:mongobdpassword@parser-cluster.lymbk.mongodb.net/?retryWrites=true&w=majority'
// Backup database server via mongo cluster db

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/cvdb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


mongoose.connection.on('connected', () => {
    console.log('connected to server!!!');
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);


app.listen(PORT, console.log(`server is starting at ${PORT}`));     // remember to use backtick and not '' => ``