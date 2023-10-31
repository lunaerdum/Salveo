const express = require('express');
const userRoutes = require('./user/userRoutes');
const router = express.Router();

//api/user/x
router.use('/user', userRoutes);
//router.use('/game', gameRoutes);

module.exports = router;