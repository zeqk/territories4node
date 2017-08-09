var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose')
  Territory = require('./api/models/territoryModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://userdb:ezequiel123@mongodb/TerritoriesDb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/territoriesRoutes');
routes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);