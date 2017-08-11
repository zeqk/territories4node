var express = require('express'),
  app = express(),
  port = process.env.OPENSHIFT_NODEJS_PORT || 8080,
  ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
  mongoose = require('mongoose')
  Territory = require('./api/models/territoryModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
var connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
  'territoriesdb';
mongoose.connect('mongodb://' + connection_string); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/territoriesRoutes');
routes(app);

app.get('/', function(req, res) {
    res.send('Hello from Territories  at '+ new Date());
});


app.listen(port,ip);


console.log('todo list RESTful API server started on: ' + port);

module.exports = app;