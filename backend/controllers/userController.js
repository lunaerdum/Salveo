import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            res.status(422).json({ error: "Fill all the details!" });
            return;
        }

        const userValid = await User.findOne({ email });

        if (userValid && (await userValid.matchPassword(password))) {
            generateToken(res, userValid._id);
            res.status(200).json({
                success: true,
                message: 'Login successful',
                user: {
                    _id: userValid._id,
                    username: userValid.username,
                    email: userValid.email
                }
            });
        } else {
            res.status(401).json({ error: "Invalid email or password" });
        }

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password, cpassword } = req.body;

    try {
        if (!username || !email || !password || !cpassword) {
            res.status(422).json({ error: "Fill all the details!" });
            return;
        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            res.status(400).json({ error: 'User already exists' });
        } else if (password !== cpassword) {
            res.status(422).json({ error: "Password and Confirm Password aren't matching!" });
        } else {
            const finalUser = new User({
                username,
                email,
                password,
                cpassword,
            });

            const storeData = await finalUser.save();

            generateToken(res, storeData._id);
            res.status(201).json({
                _id: storeData._id,
                username: storeData.username,
                email: storeData.email
            });
        }
    } catch (error) {
        console.error("Invalid user data:", error);
        res.status(500).json({ error: "Check your details!" });
    }
});

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({ message: 'User logged out' });
});

const getUserProfile = asyncHandler(async (req, res) => {
    const user = {
        _id: req.user._id,
        username: req.user.username,
        email: req.user.email
    };
    res.status(200).json(user);
});

const updateUserProfile = asyncHandler(async (req, res) => {
    try {
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
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error("Error updating user profile:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export {
    loginUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};