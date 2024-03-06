import express from 'express';
import { ApolloServer } from '@apollo/server';
import http from 'http';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import { v4 as uuidv4 } from 'uuid';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { typeDefs } from './typeDefs/typeDefs.mjs';
import connection from './database/connection.mjs';
import resolvers from './resolvers/resolvers.mjs';

const app = express();
const httpServer = http.createServer(app);

app.use(
    session({
        genid: req => uuidv4(),
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
    })
);

await connection();

await new Promise(resolve => {
    httpServer.listen({ port: 8888 }, resolve);
});

console.log(`Server is running on localhost:8888/graphql`);
