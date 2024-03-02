// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env.MONGODB_URI;

const connection = async () => {
    try {
        await mongoose.connect(mongoUri, {
            autoIndex: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to MongoDB', error);
    }
};

export default connection;
