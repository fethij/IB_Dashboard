var express = require("express");

var router = express.Router();


router.get("/", function(req, res) {
   // console.log("hello I'm on the start page");
res.render("index");
});

router.get('/Main', function(req, res) {
     res.render('Main');}
);

router.get('/Domeinen', function(req, res) {
   res.render('Domeinen');}
);

router.get('/placeholder', function(req, res) {
   res.render('placeholder');}
);

router.get('/Statistieken', function(req, res) {
   res.render('Statistieken');}
);

module.exports = router;