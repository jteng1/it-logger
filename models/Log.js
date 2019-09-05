const mongoose = require('mongoose');

const LogSchema = mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  attention: {
    type: Boolean,
    required: true
  },
  tech: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'techs'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('log', LogSchema);
