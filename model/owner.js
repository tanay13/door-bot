const mongoose = require('mongoose');
const OwnerSchema = new mongoose.Schema({
  Shopname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  timing: {
    type: String,
    required: true,
  },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    username: String,
  },
  address: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Owner = mongoose.model('Owner', OwnerSchema);

module.exports = Owner;
