var express = require('express');
var router = express.Router();
var Owner = require('../model/owner');
var middleware = require('../middleware');

//Index Route
router.get('/', function (req, res) {
  //get campgrounds from DB
  Owner.find({ category: 'electronics' }, function (err, allElec) {
    if (err) {
      console.log(err);
    } else {
      res.render('electronic', { Owner: allElec });
    }
  });
});
//SHOW - show more info
router.get('/:id', function (req, res) {
  Owner.findById(req.params.id, function (err, foundShop) {
    if (err) {
      console.log(err);
    } else {
      res.render('electronicdesc', { Owner: foundShop });
    }
  });
});
//DESTROY Shop
router.post('/:id', function (req, res) {
  Owner.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.redirect('/electronics');
    } else {
      res.redirect('/electronics');
    }
  });
});

module.exports = router;
