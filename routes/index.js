var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/login2', function(req, res, next) {
  res.render('login2', { title: 'Express' });
});
// router.get('/login2', function(req, res, next) {
//   res.render('login', { title: 'Express' });
// });
module.exports = router;
