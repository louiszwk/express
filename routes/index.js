var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('demo1', { title: 'Express' });
});
router.get('/demo2', function(req, res, next) {
  res.render('demo2', { title: 'Express' });
});
router.get('/demo3', function(req, res, next) {
  res.render('demo3', { title: 'Express' });
});
router.get('/demo4', function(req, res, next) {
  res.render('demo4', { title: 'Express' });
});
router.get('/demo5', function(req, res, next) {
  res.render('demo5', { title: 'Express' });
});
module.exports = router;
