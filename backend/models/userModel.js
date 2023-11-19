import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import validator from 'validator';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Make sure to use a valid email!")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    cpassword: {
        type: String,
        required: true,
        minlength: 8
    },
    token: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ]
},
    {
        timestamps: true
    }
);

userSchema.pre('save', async function (next) {

    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);
    }

    if (this.isModified('cpassword')) {
        const salt = await bcrypt.genSalt();
        this.cpassword = await bcrypt.hash(this.cpassword, salt);
    }

    next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password) || await bcrypt.compare(enteredPassword, this.cpassword);
};

const User = mongoose.model("users", userSchema);

export default User; 