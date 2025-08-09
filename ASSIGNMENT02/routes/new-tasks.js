const express = require('express');
const router = express.Router();
const Task = require('../models/Task');


router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.render('index', { title: 'My To-Do List', tasks });
  } catch (err) {
    next(err);
  }
});

router.get('/tasks/new', (req, res) => {
  res.render('new-task', { title: 'Add New Task' });
});

// POST /tasks - Create new task
router.post('/tasks', async (req, res, next) => {
  try {
    const { title, category } = req.body;
    if (!title || title.trim() === '') {
      return res.render('new-task', {
        title: 'Add New Task',
        error: 'Task title is required',
      });
    }
    await Task.create({ title: title.trim(), category: category ? category.trim() : '' });
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

router.get('/tasks/:id/edit', async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).send('Task not found');
    res.render('edit-task', { title: 'Edit Task', task });
  } catch (err) {
    next(err);
  }
});

router.put('/tasks/:id', async (req, res, next) => {
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

router.delete('/tasks/:id', async (req, res, next) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
