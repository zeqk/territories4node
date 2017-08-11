'use strict';
module.exports = function(app) {
  var controller = require('../controllers/territoriesController');


  // todoList Routes
  app.route('/territories')
    .get(controller.test)
    .post(controller.test);


  app.route('/territories/:territoryId')
    .get(controller.test)
    .put(controller.test)
    .delete(controller.test);
};