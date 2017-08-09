'use strict';


var mongoose = require('mongoose'),
  Territory = mongoose.model('Territories');

exports.getAll = function(req, res) {
  Territory.find({}, function(err, record) {
    if (err)
      res.send(err);
    res.json(record);
  });
};




exports.add = function(req, res) {
  var newRecord = new Territory(req.body);
  newRecord.save(function(err, record) {
    if (err)
      res.send(err);
    res.json(record);
  });
};


exports.get = function(req, res) {
  Territory.findById(req.params.territoryId, function(err, record) {
    if (err)
      res.send(err);
    res.json(record);
  });
};


exports.update = function(req, res) {
  Territory.findOneAndUpdate({_id: req.params.territoryId}, req.body, {new: true}, function(err, record) {
    if (err)
      res.send(err);
    res.json(record);
  });
};


exports.delete = function(req, res) {


  Territory.remove({
    _id: req.params.territoryId
  }, function(err, record) {
    if (err)
      res.send(err);
    res.json({ message: 'Territory successfully deleted' });
  });
};