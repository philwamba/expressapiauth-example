const router = require('express-promise-router')();
const passport = require('passport');

const UsersController = require('../controllers/users');
// require('../services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });

router.route('/secret')
  .get(requireAuth, UsersController.secret);

module.exports = router;
