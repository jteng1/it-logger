const express = require('express');
const router = express.Router();

const Log = require('../models/Log');

// @route     GET api/logs
// @desc      Get all logs
// @access    Public
router.get('/', (req, res) => {
  res.send('Get all logs');
});

// @route     POST api/logs
// @desc      Add new log
// @access    Public
router.post('/', (req, res) => {
  res.send(req.body);
});

// @route     PUT api/logs/:id
// @desc      Update log
// @access    Public
router.put('/:id', (req, res) => {
  res.send('Update log');
});

// @route     DELETE api/logs/:id
// @desc      Delete log
// @access    Public
router.delete('/:id', (req, res) => {
  res.send('Delete log');
});

module.exports = router;
