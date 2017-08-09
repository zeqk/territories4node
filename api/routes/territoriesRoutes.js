'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/territoriesController');


  // todoList Routes
  app.route('/territories')
    .get(todoList.getAll)
    .post(todoList.add);


  app.route('/territories/:territoryId')
    .get(todoList.get)
    .put(todoList.update)
    .delete(todoList.delete);
};