const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const tokenize = user => jwt.sign(
  { payload: user.toJSON() },
  process.env.AUTH_SECRET,
  { expiresIn: '25h' }
);

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  passwordHash: {
    type: String,
    select: false
  }
}, {
  toJSON: {
    transform: function(doc, ret) {
      delete ret.__v,
      delete ret.passwordHash;
    }
  }
});

userSchema.virtual('password').set(function(password) {
  this._tempPassword = password;
});

userSchema.pre('save', function(next) {
  bcrypt.hash(this._tempPassword, 10)
    .then(passwordHash => {
      this.passwordHash = passwordHash;
      next();
    });
});

userSchema.statics.signup = function(email, password) {
  return this
    .create({ email, password })
    .then(user => {
      return { user, token: tokenize(user) };
    });
};

userSchema.statics.signin = function(email, password) {
  return this
    .findOne({ email })
    .select({
      passwordHash: true,
      email: true
    })
    .then(user => {
      if(!user) return null;

      return bcrypt.compare(password, user.passwordHash)
        .then(result => {
          if(!result) return null;
          return { user, token: tokenize(user) };
        });
    });
};

userSchema.statics.findByToken = function(token) {
  return Promise.resolve(jwt.verify(token, process.env.AUTH_SECRET))
    .then(result => result.payload);
};

module.exports = mongoose.model('User', userSchema);
