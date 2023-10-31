const express = require('express');
const asGuest = require ('./asGuest');

const router = express.Router();

router.get('/guest', asGuest);

module.exports = router;