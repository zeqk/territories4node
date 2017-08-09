'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TerritorySchema = new Schema({
  name: {
    type: String,
    Required: 'Nombre del territorio'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  number: {
      type: Number
  }
});

module.exports = mongoose.model('Territories', TerritorySchema);