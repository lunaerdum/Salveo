const express = require('express');
const getUser = require('./getUser')
const router = express.Router();

router.get('/', getUser);
// router.post('/', createUser);
// router.post('/', updateUser);
// router.post('/', deleteUser);


module.exports = router;
