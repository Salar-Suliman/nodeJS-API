
var express = require('express');
var app = express();
var fs = require('fs');

var file = fs.readFileSync(__dirname + '/events.json');

var obj = JSON.parse(file);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
  console.log('route /');

});
app.get('/events', function (req, res) {
  console.log('route /events');
  
  res.send(obj);
});

app.get('/events/random', function (req, res) {
  console.log('route /events/random');
  
 
  res.send(obj[Math.floor(Math.random() * (10- 1) + 1)]);
});
app.get('/events/:id', function (req, res) {
  console.log('route /:id');
  
  console.log(req.params)
  obj1 = obj.filter(obj1 => obj1._id["$oid"] === req.params.id);
    { obj1.length >= 1 ? 
      res.send(obj1)
    :
      res.send('pleas write right ID')
    }

  
/*    var result = obj[0].gpsm  */
/*   var string = ""
  string += "id;name;time;longitude;latitude\n"

  obj.map(i => {
    string += i._id.$oid + "; " + i.aqm.r3000['$numberInt'] + "; " + i.gps.gps_time + "; " + i.gps.longitude["$numberDouble"] + "; " + i.gps.latitude["$numberDouble"] + "\n"
  }) */

 
  
});

app.get('/*', function (req, res) {
  console.log('route not found');
  
  res.send("this pag not FOUND ");
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});