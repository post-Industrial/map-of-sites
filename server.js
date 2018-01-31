// import { request } from 'http';
let sandbox = function() {

// Const Defined
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./app/config/db');
const app = express();
const port = 3000;
const assert = require('assert');
const dbName = 'Sites';

//Middle Hooks
app.use(bodyParser.urlencoded({ extended: true }));

//MongoConnect 
MongoClient.connect(db.url, function(err, client) {
    
    var db = client.db(dbName);
    assert.equal(null, err);
    console.log("Connected successfully to Cloud");
    //Routs
    require('./app/routes')(app, db);

    app.listen(port, () => {
        console.log("Port " + port + " is now are listening");
    });               
});
}();