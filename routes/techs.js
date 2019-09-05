const express = require('express');
const router = express.Router();

const Tech = require('../models/Tech');

// @route     GET api/techs
// @desc      Get all technicians
// @access    Public
router.get('/', (req, res) => {
  res.send('Get all technicians');
});

// @route     POST api/techs
// @desc      Add new technician
// @access    Public
router.post('/', (req, res) => {
  res.send('Add technician');
});

// @route     PUT api/techs/:id
// @desc      Update technician
// @access    Public
router.put('/:id', (req, res) => {
  res.send('Update technician');
});

// @route     DELETE api/techs/:id
// @desc      Delete technician
// @access    Public
router.delete('/:id', (req, res) => {
  res.send('Delete technician');
});

module.exports = router;
