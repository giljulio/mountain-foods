var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('pages/index', {
    head: {
      title: "Home"
    },
    page_h1: "Home",
    page_h2: "Wild food which is freshly picked and delivered."
  });
});
router.get('/contact', function(req, res, next) {
  res.render('pages/contact', {
    head: {
      title: "Contact us"
    },
    page_h1: "Contact Us",
    page_h2: "Picking with pride since 1995."
  });
});
router.get('/operation', function(req, res, next) {
  res.render('pages/operation', {
    head: {
      title: "The operation"
    },
    page_h1: "The foraging",
    page_h2: null
  });
});
router.get('/products/:product_name', function(req, res, next) {
  res.render('pages/products', {
    head: {
      title: "Wild"
    },
    page_h1: "Wild " + "",
    page_h2: "Wild " + " picked by hand"
  });
});
router.get('/about', function(req, res, next) {
  res.render('pages/about', {
    head: {
      title: "Wild"
    },
    page_h1: "About Us",
    page_h2: "Picking with pride since 1995."
  });
});
router.get('/catalogue', function(req, res, next) {
  res.render('pages/catalogue', {
    head: {
      title: "Catalogue"
    },
    page_h1: "Catalogue",
    page_h2: "Wild food which is freshly picked and delivered."
  });
});

module.exports = router;
