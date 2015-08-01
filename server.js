var express = require('express');
var app= express();
var mongojs = require('mongojs');
var db = mongojs('sign',['sign']);
var bodyParser = require('body-parser');
var passwordHash = require('password-hash');


app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.get('/sign',function(req,res)
{
    console.log('get request recived');
    res.json({"signin":"yes"});
});

app.post('/sign', function (req, res) {
    console.log('post');
req.body.password = passwordHash.generate(req.body.password);
    db.sign.find({'name':req.body.name,'password':req.body.password}, function (err,doc) {
        console.log(doc);
        res.json(doc);
    });

app.post('/signup', function (req, res) {

    console.log('signup');

    db.sign.insert(req.body, function (err, doc) {

        res.json(doc);
    });
});
    //res.json({'abhi':'i am fine'});
});

app.listen(8000);
console.log('Server running');