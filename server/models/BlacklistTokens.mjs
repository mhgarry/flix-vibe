import { Schema, model } from 'mongoose';

const BlacklistTokenSchema = new Schema({
    token: {
        type: String,
        required: true,
        unique: true,
    },
    expireAt: {
        type: Date,
        required: true,
        default: Date.now,
        index: { expires: '1h' }, // Tokens expire in 1 hour
    },
});

const TokenBlacklist = model('TokenBlacklist', BlacklistTokenSchema);

export default TokenBlacklist;
