var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    
    var content;
    fs.readFileSync('index.html', function (err, data) {
	if (err) throw err;
	console.log(data);
	content = data;
   c });
    console.log(content);
    var text =  content.toString('utf-8');
    response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
