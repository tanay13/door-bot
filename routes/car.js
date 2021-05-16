var express = require('express');
var router = express.Router();
var Owner = require('../model/owner');
var middleware = require('../middleware');

//Index Route
router.get('/', function (req, res) {
  //get campgrounds from DB
  Owner.find({ category: 'Car' }, function (err, allCar) {
    if (err) {
      console.log(err);
    } else {
      res.render('carpage', { Owner: allCar });
    }
  });
});
//SHOW - show more info
router.get('/:id', function (req, res) {
  Owner.findById(req.params.id, function (err, foundCar) {
    if (err) {
      console.log(err);
    } else {
      res.render('cardesc', { Owner: foundCar });
    }
  });
});
//DESTROY Shop
router.post('/:id', function (req, res) {
  Owner.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.redirect('/car');
    } else {
      res.redirect('/car');
    }
  });
});

module.exports = router;
