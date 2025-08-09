var express = require('express');
var router = express.Router();
var Task = require('../models/task');

/* GET home page with tasks from DB */
router.get('/', async function(req, res, next) {
  try {
    const tasks = await Task.find();
    res.render('index', { title: 'My To-Do List App', tasks });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
