import dotenv from 'dotenv';
import connectDB from './app/mongodb/connection';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import resolvers from './app/graphql/resolvers/resolvers';
import typeDefs from './app/graphql/schemas/typeDefs';
dotenv.config();

const startServer = async (): Promise<void> => {
  try {
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
