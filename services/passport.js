const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt  =  require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;

const { JWT_SECRET } = require('../config');
const User = require('../models/user');

// Json Web Tokens Strategy
passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: JWT_SECRET,
}, async (payload, done) => {
  try {
    // Find user's specific in token
    const user = await User.findById(payload.sub);
    
    // Handle non-existent user
    if (!user) {
      return done(null, false);
    }
    
    // Otherwise, return user
    done(null, user);
  } catch (error) {
    console.log(error);
    done(error, false);
  }
}));

// Local Strategy
passport.use(new LocalStrategy({
  usernameField: 'email',
}, async (email, password, done) => {
  try {
    // Find user by email
    const user = await User.findOne({ email });

    // Handle if user does not exist
    if (!user) {
      return done(null, false);
    }

    // Check if password is correct
    const isMatch = await user.isValidPassword(password);

    if (!isMatch) {
      return done(null, false);
    }

    // Otherwise, return user
    done(null, user);
  } catch (error) {
    done(error, false);
  }  
}));
