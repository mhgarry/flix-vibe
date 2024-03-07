// authMiddleware.mjs
import jwt from 'jsonwebtoken';
import { isTokenBlacklisted } from '../utils/TokenUtils.mjs';

const authMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new Error('Authorization header is missing');
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            throw new Error('Token is missing');
        }

        if (await isTokenBlacklisted(token)) {
            throw new Error('Token is blacklisted');
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        next();
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(401).send({ error: error.message });
    }
};

export default authMiddleware;
