import User from "../models/User.mjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const userResolvers = {
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
    async loginUser(_, { login, password }) {
      try {
        const user = await User.findOne({
          $or: [{ username: login }, { email: login }],
        });
        if (!user) {
          throw new Error("User not found");
        }

        const isValid = await user.checkPassword(password);

        if (!isValid) {
          throw new Error("Invalid password");
        }

        // Generate a token (using JWT in this example)
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        return {
          token,
          user,
        };
      } catch (error) {
        console.log("Error logging in", error);
        throw new Error(error.message);
      }
    },
  },
};
export default userResolvers;
