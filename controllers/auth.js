const JWT = require('jsonwebtoken');
const User = require('../models/user');

const { JWT_SECRET } = require('../config');

const signToken = user => {
  return JWT.sign({
    iss: 'VineLab',
    sub: user._id,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1)
  }, JWT_SECRET);
};

module.exports = { 
  signUp: async (req, res, next) => {    
    const { email, password } = req.value.body;

    // Check if user exists
    const foundUser = await User.findOne({ email });
    if (foundUser) { 
      return res.status(403).json({ err: 'Email already exits!'}) 
    }

    // Save user
    const user = new User({ email, password });
    const savedUser = await user.save();
    //return res.status(201).json(savedUser);
    // Generate the token
    const token = signToken(savedUser);

    res.status(200).json({ token });
  },
  signIn: async (req, res, next) => {
    // Generate token
    const token = signToken(req.user);

    res.status(200).json({ token });
  }
}
