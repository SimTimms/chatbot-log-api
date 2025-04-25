import dotenv from 'dotenv';
import connectDB from './api/mongodb/connection';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import resolvers from './api/graphql/resolvers/resolvers';
import typeDefs from './api/graphql/schemas/typeDefs';
dotenv.config();
const startServer = async (): Promise<void> => {
  try {
    if (!process.env.PORT) {
      throw new Error('PORT is not defined in environment variables');
    }
    const PORT = process.env.PORT || 4000;

    await connectDB();

    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    const { url } = await startStandaloneServer(server, {
      listen: { port: Number(PORT) },
    });
    console.log(`Server ready at ${url}`);

    // Start Server
  } catch (error) {
    console.error('Failed to start the server:', error);
  }
};

startServer();
