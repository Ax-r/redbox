const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/user');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', user_controller.index);
router.post('/create', user_controller.user_create);

router.post('/login', user_controller.user_login);


module.exports = router;