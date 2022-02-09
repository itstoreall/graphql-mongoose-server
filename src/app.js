import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import connectDb from './config/db.js';
import typeDefs from './schemas/index.js';
import resolvers from './resolvers/index.js';
import models from './models/index.js';

connectDb();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
});

// const PORT = process.env.PORT || 5000;

server.listen({ port: process.env.PORT || 5000 }).then(({ url }) => {
  console.log(`server is running ★(◔.◔)★ ${url}`);
});

// server.listen(PORT).then(({ url }) => {
//   console.log(`server is running ★(◔.◔)★ http://localhost:${url}/graphql`);
// });
