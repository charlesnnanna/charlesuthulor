var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
});

router.get('/portfolio', (req, res) => {
  res.render('portfolio');
})

router.get('/about', (req, res) => {
  res.render('about');
})
module.exports = router;
