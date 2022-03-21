const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
//Initializations

//Settings

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
//Routes

//Static Files

//Starting the server
app.listen(3000, () => {
    console.log('Listening on PORT 3000');
});