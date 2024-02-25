import User from "./models/User.mjs";

const resolvers = {
  Query: {
    async user(_, { id }) {
      const user = User.findById(id);
      return await user;
    },
    async users() {
      const users = User.find();
      return await users;
    },
  },
  Mutation: {
    async createUser(_, { username, email, password }) {
      try {
        const newUser = new User({ username, email, password });
        await newUser.save();
        return newUser;
      } catch (error) {
        console.log("Error creating user", error);
      }
    },
  },
};

export default resolvers;
