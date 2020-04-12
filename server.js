var fs = require('fs');

var data = fs.readFileSync('productsjson.json');
var words = JSON.parse(data);
console.log(words);
// console.log('server is starting')
var express = require('express');
var app = express();
var server = app.listen(3000, listening);

function listening() {

    console.log("Listening ...");
}
app.use(express.static('website'));



app.get('/add/:word/:score', addWord);

function addWord(request, response) {
    var data = request.params;
    var word = data.word;
    var score = Number(data.score);
    var reply;
    if (!score) {
        replay = {
        msg: "Score is required."
    }
}
    words[word] = score;

    var reply = {
        msg: "Thank you for your word."
    }
    response.send(reply);
}

app.get('/all',sendAll);

function sendAll(request, response) {
    response.send(words);
}