// @desc Auth user | Set token
// route POST /api/users/auth
// @access Public

import asyncHandler from 'express-async-handler';
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Auth User'});
});

export { authUser };