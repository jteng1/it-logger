const express = require('express');
const router = express.Router();

// @route     POST api/logs
// @desc      Add a post into the logs
// @access    Public
router.post('/', (req, res) => {
  res.send('Adds a log');
});

module.exports = router;
