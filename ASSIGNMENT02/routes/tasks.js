const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// READ: List all tasks
router.get('/', async (req, res) => {
    const tasks = await Task.find().lean();
    res.render('tasks/list', { tasks });
});

// CREATE: Show add form
router.get('/add', (req, res) => {
    res.render('tasks/add');
});

// CREATE: Handle form submission
router.post('/add', async (req, res) => {
    await Task.create(req.body);
    res.redirect('/tasks');
});

// UPDATE: Show edit form
router.get('/edit/:id', async (req, res) => {
    const task = await Task.findById(req.params.id).lean();
    res.render('tasks/edit', { task });
});

// UPDATE: Handle edit
router.post('/edit/:id', async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/tasks');
});

// DELETE: Handle delete
router.get('/delete/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/tasks');
});

module.exports = router;
