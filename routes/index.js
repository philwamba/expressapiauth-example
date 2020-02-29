const router = require('express-promise-router')();

router.use('/auth', require('./auth'));
router.use('/user', require('./user'));

module.exports = router;
