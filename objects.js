var _ = require('lodash');
var request = require('request');
var util = require('util');

module.exports = function(app) {
  _objects = [];

  /*CREATE*/
  app.post('/objects', function(req, res) {
    _objects.push(req.body);
    res.json({info: 'object created successfully.'});
  });

  /*READ*/
  /*All*/
  app.get('/objects', function(req, res) {
    res.send(_objects);
  });
  /*One*/
  app.get('/objects/:id', function(req, res) {
    res.send(
      _.find(
        _objects,
        {
          id, req.params.id
        }
      )
    );
  });

  /*UPDATE*/
  app.put('/objects/:id', function(req, res) {
    var index = _.findIndex(
      _objects,
      {
        id: req.params.id
      }
    );
    _.merge(_objects[index], req.body);
  });

  /*DELETE*/
  app.delete('/objects/:id', function(req, res) {
    _.remove(_objects, function(object) {
      return objects.id === req.params.id;
    });
    res.json({info: 'object removed successfully.'});
  });
}
