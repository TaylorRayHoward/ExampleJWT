const router = require('express').Router();
const auth = require('./authentication');

router.use('/auth', auth);

module.exports = router;