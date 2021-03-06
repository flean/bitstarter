var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    console.log("Starting");
    var content = fs.readFileSync('index.html', 'utf8');
    console.log(content);
    var text =  content.toString('utf8');
    console.log(text);
    response.send(text);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
