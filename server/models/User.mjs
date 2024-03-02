/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import Joi from 'joi';

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            // validate: {
            //     validator: password => {
            //         const validLength = password.length >= 8;
            //     const hasNumber = /\d/.test(password);
            //     const hasLowerCase = /[a-z]/.test(password);
            //     const hasUpperCase = /[A-Z]/.test(password);
            //     const hasNonAlphanumeric = /\W/.test(password);
            //     return (
            //         validLength &&
            //         hasNumber &&
            //         hasLowerCase &&
            //         hasUpperCase &&
            //         hasNonAlphanumeric
            //     );
            // },
            // message:
            // 'Password must be at least 8 characters long and contain at least one number, one lowercase letter, one uppercase letter, and one non-alphanumeric character',
            // },
        },
    },
    { timestamps: true }
);

UserSchema.statics.validateUser = userData => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string()
            .min(8)
            .pattern(/^[a-zA-Z0-9!@#$%^&*]{8,30}$/)
            .required(),
    });
    return schema.validate(userData);
};

// eslint-disable-next-line func-names,, consistent-return
UserSchema.pre('save', async function (next) {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);

        this.password = await bcrypt.hash(this.password, salt);
    } catch (error) {
        return next(error);
    }
    next();
});

UserSchema.methods.checkPassword = async function (candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
};

const User = model('User', UserSchema);

export default User;
