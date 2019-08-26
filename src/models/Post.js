const mongoose = require('mongoose');
const Postschema = new mongoose.Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  ceratedAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Post', Postschema);