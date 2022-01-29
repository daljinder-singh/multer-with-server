'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongo = require('./mongoConfig/config')

const port = 4000;

const cors = require('cors');  
const router = require('./routes/routes');
//cors is prevent hacking `https://javascript.info/fetch-crossorigin` 
//cros - Cross-Origin Resource Sharing (provide data to other domain)

app.use(cors());
app.use(router);
// parse application//x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(express.static(__dirname + '../public/images'));

app.listen(port, () =>{
    console.log(`server is running at ${port}`)
})