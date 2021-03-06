const mongoose = require('mongoose');

const LogSchema = mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  attention: {
    type: Boolean,
    default: false
  },
  tech: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tech'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('log', LogSchema);
