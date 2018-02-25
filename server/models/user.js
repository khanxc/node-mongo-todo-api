
var mongoose = require('mongoose');

var User = mongoose.model('Users',
{
  user: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
}
);

module.exports = {User};
