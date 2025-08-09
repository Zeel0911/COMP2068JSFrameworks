const express = require('express');
const router = express.Router();
const Task = require('../models/Task'); // fixed Task name

router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.render('index', { 
      title: 'My To-Do List', 
      tasks,
      currentYear: new Date().getFullYear()
    });
  } catch (err) {
    next(err);
  }
});

// GET Add Task Form
router.get('/tasks/new', (req, res) => {
  res.render('new-task', { 
    title: 'Add New Task',
    currentYear: new Date().getFullYear()
  });
});

// POST Create Task
router.post('/tasks', async (req, res, next) => {
  try {
    const { title, category } = req.body;
    await Task.create({ title, category });
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

// GET Edit Task Form
router.get('/tasks/:id/edit', async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).send('Task not found');
    res.render('edit-task', { 
      title: 'Edit Task', 
      task,
      currentYear: new Date().getFullYear()
    });
  } catch (err) {
    next(err);
  }
});

// POST Update Task
router.post('/tasks/:id', async (req, res, next) => {
  try {
    const { title, category, completed } = req.body;
    await Task.findByIdAndUpdate(req.params.id, {
      title,
      category,
      completed: completed === 'on',
    });
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

// POST Delete Task
router.post('/tasks/:id/delete', async (req, res, next) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
