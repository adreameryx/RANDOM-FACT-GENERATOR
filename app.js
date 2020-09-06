const express = require('express');

const app = express();

const morgan = require('morgan');

const bodyParser = require('body-parser');

const factRouters = require('./api/routes/facts');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=> {
    req.header("Access-Control-Allow-Origin",'*')
    req.header("Access-Control-Allow-Headers",'*')
    if (req.method---"OPTIONS"){
        res.header("Access-Control-Allow-Methods",'PUT,GET,POST,DELETE,PATCH')
        
    }
})

app.use('/facts', factRouters); // to be changed

module.exports = app;

