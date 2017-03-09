var express = require('express');
var bodyParse = requre('body-parser');

var app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({
  extented: true
}));

var object = require('./objects.js')(app);

var server = app.listen(3000, function() {
  console.log('Server running at http://127.0.0.1:3000/');
})
