const router = require('express-promise-router')();

const { validateBody, schema } = require('../helpers/validate');
const UsersController = require('../controllers/users');

router.route('/signup')
  .post(validateBody(schema.authSchema), UsersController.signUp);

router.route('/signin')
  .post(UsersController.signIn);

  router.route('/secret')
  .post(UsersController.secret);

module.exports = router;
