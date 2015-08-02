var express = require('express');
var app= express();
var mongojs = require('mongojs');
var db = mongojs('sign',['users']);
var bodyParser = require('body-parser');
var passwordHash = require('password-hash');


app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());

app.post('/signup', function (req, res) {


    console.log(req.body);
    db.users.find({"fname":req.body.fname}, function (err, doc) {

        console.log(doc);
        if(doc.length==0)
        {
            db.users.insert(req.body, function (err, doc) {

                console.log(doc);
                res.json('Profile created');
            });
        }else
        {
            res.json('Please choose another user name');
        }
    })
    /*db.users.insert(req.body, function (err, doc) {

        console.log(doc);
        res.json(doc);
    });*/
});

app.listen(3000);
console.log("Server running");

