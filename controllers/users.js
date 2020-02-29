const User = require('../models/user');

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
    return res.status(201).json(savedUser);
  },
  signIn: async (req, res, next) => {
    // Generate token
    console.log('Sign In is called');
  },
  secret: async (req, res, next) => {
    console.log('Secret is called');
  }
}
