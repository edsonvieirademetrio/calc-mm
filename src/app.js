const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//importing routes
const calculatorRoutes = require('./routes/calculator');

//settings
app.set('port', process.env.PORT || 8000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    hots: 'localhost',
    user: 'root',
    password: 'password',
    port: 3306,
    database: 'app_development'
}, 'single'));
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/', calculatorRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));


//starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port 8000');
});