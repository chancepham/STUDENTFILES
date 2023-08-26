
var http = require("http");
var fs = require("fs");
var path = require("path");
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
let friends = require('./app/data/friends.json')
let allScoresDifference = [];
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
    next();
});

app.use(express.static("./app/public"));

app.use(cors());

app.get("/friends", function (req, res) {

    res.json(friends);
});
app.post("/friends", function (req, res) {
    console.log('sss')
    console.log('sss')
    console.log('sss')
    console.log(friends)
console.log(req.body)
    friends.push(req.body)
    res.json(friends);
});
app.post("/userdata", function (req, res) {
    console.log(req +'this is a req')
    userData = req
    console.log(req + 'adssaddasdsadsa')
    friends.push(req.body)

    

    res.json(friends)
 
});
app.get("/compare", function (req, res) {
    
    function difference(a, b) {
        return Math.abs(a - b);
    }
    function scoreCompare() {

        let differenceArr = [];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        for (let x = 0; x < friends.scores.length; x++) {
            let tempDiff = difference(parseInt(userData.scores[x]), parseInt(friends.scores[x]))
            differenceArr.push(tempDiff)

        }
        let combinedDiff = differenceArr.reduce(reducer)
        allScoresDifference.unshift(combinedDiff)
        return combinedDiff

    }


    console.log(friends + 'there should be diff in it ')
    res.send(scoreCompare())
});
app.get("/", function (req, res) {
    fs.readFile("./app/public/index.html", "UTF-8", function (err, html) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
    });
});
app.get("/data", function (req, res) {
    allScoresDifference.push(parseInt(req))
    
});
app.get("/survey", function (req, res) {
    fs.readFile("./app/public/survey.html", "UTF-8", function (err, html) {
   
        res.writeHead(200, { "Content-Type": "text/html" });
  
        res.end(html);
    });
});



app.listen(4000);

console.log("Express app running on port 4000");

module.exports = app;