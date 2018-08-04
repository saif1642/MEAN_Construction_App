const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Plot = require('../models/Plot');

/* GET ALL Plot */
router.get('/', function(req, res, next) {
    Plot.find(function (err, plots) {
      if (err) return next(err);
      res.json(plots);
    });
  });
  
  /* GET SINGLE plot BY ID */
  router.get('/:id', function(req, res, next) {
    Plot.findById(req.params.id, function (err, plot) {
      if (err) return next(err);
      res.json(plot);
    });
  });

  /* SAVE plot */
router.post('/', function(req, res, next) {
    Plot.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* UPDATE Plot */
  router.put('/:id', function(req, res, next) {
    Plot.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* DELETE Plot */
  router.delete('/:id', function(req, res, next) {
    Plot.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  module.exports = router;