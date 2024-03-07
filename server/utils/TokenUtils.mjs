import BlacklistToken from '../models/BlacklistTokens.mjs';

export const invalidateToken = async token => {
    try {
        const newToken = new BlacklistToken({ token });
        await newToken.save();
        return true;
    } catch (error) {
        console.error('Error invalidating token:', error);
        throw error;
    }
};
export const isTokenBlacklisted = async token => {
    try {
        const result = await BlacklistToken.findOne({ token });
        return !!result;
    } catch (error) {
        console.error('Error checking token blacklist:', error);
        throw error;
    }
};
