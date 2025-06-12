var express = require('express');
var router = express.Router();

/* Home page */
router.get('/', function(req, res) {
  res.render('home', { title: 'Home' });
});

/* About page */
router.get('/about', function(req, res) {
  res.render('about', { title: 'About Me' });
});

/* Projects page */
router.get('/projects', function(req, res) {
  res.render('projects', { title: 'Projects' });
});

/* Contact page */
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
