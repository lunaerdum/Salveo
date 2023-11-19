import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc Login user | Set token
// route POST /login
// @access Public

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }

});

// @desc Register a new user
// route POST /register
// @access Public

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password, cpassword } = req.body;

    if (!username || !email || !password || !cpassword) {
        res.status(422).json({ error: "Fill all the details!" })
    }

    try {

        const userExists = await User.findOne({ email: email });

        if (userExists) {
            res.status(422);
            throw new Error('User already exists');
        }
        else if (password !== cpassword) {
            res.status(422).json({ error: "Password and Confirm Password aren't matching!" })
        }
        else {
            const finalUser = new User({
                username,
                email,
                password,
                cpassword,
            });

            const storeData = await finalUser.save();

            console.log(storeData);
        }
    } catch (error) {
        res.status(422).json(error);
        console.log("ERROR!")

    }

    if (user) {
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }

    res.status(200).json({ message: 'Register User' });
});

// @desc Logout user
// route POST /logout
// @access Public

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({ message: 'User logged out' });
});

// @desc Get user profile
// route GET /logout
// @access Private

const getUserProfile = asyncHandler(async (req, res) => {

    const user = {
        _id: req.user._id,
        username: req.user.username,
        email: req.user.email
    }
    res.status(200).json(user);
});

// @desc Update user profile
// route PUT /api/users/logout
// @access Private

const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.username = req.body.username || user.username;
        user.email = req.body.email || user.email;

        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,
        });

    } else {
        res.status(404);
        throw new Error('User not found');
    }
    res.status(200).json(user);
});

export {
    loginUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};