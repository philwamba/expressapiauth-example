const router = require('express-promise-router')();

const { validateBody, schema } = require('../helpers/validate');
const AuthController = require('../controllers/auth');
const requireSignIn = require('../middlewares/authorization');

router.route('/signup')
  .post(validateBody(schema.authSchema), AuthController.signUp);

router.route('/signin')
  .post(validateBody(schema.authSchema), requireSignIn, AuthController.signIn);

module.exports = router;
