/* eslint-disable import/extensions */
import userResolvers from './userResolvers.mjs';

const resolvers = {
    Mutation: {
        ...userResolvers.Mutation,
    },
};

export default resolvers;
