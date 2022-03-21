const express = require('express');
const morgan = require('morgan');
const app = express();
//Initializations

//Settings

//Middlewares
app.use(morgan('dev'));
//Routes

//Static Files

//Starting the server
app.listen(3000, () => {
    console.log('Listening on PORT 3000');
});