/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import User from '../models/User.mjs';
import { invalidateToken } from '../utils/TokenUtils.mjs';

dotenv.config();

const userResolvers = {
    Query: {
        async user(_, { id }) {
            const user = User.findById(id);
            return user;
        },
        async users() {
            const users = User.find();
            return users;
        },
    },
    Mutation: {
        async registerUser(_, { username, email, password }) {
            try {
                const existingUser = await User.findOne({
                    $or: [{ username }, { email }],
                });
                if (existingUser) {
                    throw new Error('User already exists');
                }

                const hashedPassword = await bcrypt.hash(password, 10);
                const newUser = new User({
                    username,
                    email,
                    password: hashedPassword,
                });

                await newUser.save();

                const token = jwt.sign(
                    { userId: newUser.id },
                    process.env.JWT_SECRET,
                    { expiresIn: '1h' }
                );

                return {
                    token,
                    user: newUser,
                };
            } catch (error) {
                console.log('Error creating user', error);
                throw new Error(error.message);
            }
        },

        async loginUser(_, { login, password }) {
            try {
                const user = await User.findOne({
                    $or: [{ username: login }, { email: login }],
                });

                if (!user) {
                    throw new Error('User not found');
                }

                const isValid = await bcrypt.compare(password, user.password);

                if (!isValid) {
                    throw new Error('Invalid password');
                }

                const token = jwt.sign(
                    { userId: user.id },
                    process.env.JWT_SECRET,
                    { expiresIn: '1h' }
                );

                return {
                    token,
                    user,
                };
            } catch (error) {
                console.log('Error logging in', error);
                throw new Error(error.message);
            }
        },
    },
    async logoutUser(_, { token }) {
        try {
            // Verify the token before blacklisting
            jwt.verify(token, process.env.JWT_SECRET);

            // Invalidate the token
            await invalidateToken(token);

            return true;
        } catch (error) {
            console.log('Error logging out', error);
            throw new Error('Invalid token.');
        }
    },
};
export default userResolvers;
