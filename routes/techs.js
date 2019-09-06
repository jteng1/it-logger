const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Tech = require('../models/Tech');

// @route     GET api/techs
// @desc      Get all technicians
// @access    Public
router.get('/', async (req, res) => {
  try {
    const techs = await Tech.find({});

    res.json(techs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/techs
// @desc      Add new technician
// @access    Public
router.post(
  '/',
  [
    check('firstName', 'First name is required')
      .not()
      .isEmpty(),
    check('lastName', 'Last name is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName } = req.body;

    try {
      const newTech = new Tech({
        firstName,
        lastName
      });

      const tech = await newTech.save();

      res.json(tech);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     PUT api/techs/:id
// @desc      Update technician
// @access    Public
router.put('/:id', async (req, res) => {
  const { firstName, lastName } = req.body;

  // Build technician object
  const techFields = {};
  if (firstName) techFields.firstName = firstName;
  if (lastName) techFields.lastName = lastName;

  try {
    let tech = await Tech.findById(req.params.id);

    if (!tech) return res.status(404).json({ msg: 'Technician not found' });

    tech = await Tech.findByIdAndUpdate(
      req.params.id,
      { $set: techFields },
      { new: true }
    );

    res.json(tech);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/techs/:id
// @desc      Delete technician
// @access    Public
router.delete('/:id', async (req, res) => {
  try {
    let tech = await Tech.findById(req.params.id);

    if (!tech) return res.status(404).json({ msg: 'Technician not found' });

    await Tech.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Technician Removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
