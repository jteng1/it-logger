const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

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
router.post(
  '/',
  [
    check('message', 'Message is required')
      .not()
      .isEmpty()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.send('passed');
  }
);

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
