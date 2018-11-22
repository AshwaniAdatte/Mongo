var express = require('express');
var router = express.Router();
var Heros = require('../models/heros');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Spectacular Superheroes' });
});

router.get('/saveData', function(req, res, next) {
  Heros.saveNew(req.query)
  .then(function(){
  	res.redirect('/getAllHeros')
  })
  .catch(console.log('ERR :: in resolve in promise'))
});

router.get('/getAllHeros', function(req, res, next) {
  Heros.getAll()
  .then(function(retVal){
  res.render('heros',{data : retVal})
 }) 
  .catch(console.log('ERR :: in resolve in promise'))
});

router.get('/previous', function(req, res, next) {
  Heros.getAllStuff()
  .then(function(retVal){
  res.render('delview',{data : retVal})
 }) 
  .catch(console.log('ERR :: in resolve in promise'))
});

router.get('/delete', function(req, res, next) {
  Heros.deleteFile(req.query)
  .then(function(){
   res.redirect('/getAllHeros')
 }) 
  .catch(console.log('ERR :: in resolve in promise'))
});

router.get('/update', function(req, res, next) {
  Heros.update()
  .then(function(retVal){
   res.render('update',{data : retVal})
    }) 
  .catch(console.log('ERR :: in resolve in promise'))
});

router.get('/view', function(req, res, next) {
  Heros.view(req.query)
  .then(function(retVal){
   res.render('view',{data : retVal})
    }) 
  .catch(console.log('ERR :: in resolve in promise'))
});


module.exports = router;
