import {
  logResolversQuery,
  logResolversMutation,
  DateTimeScalar,
} from "./log/logResolvers";

const resolvers = {
  Query: {
    ...logResolversQuery,
  },
  Mutation: {
    ...logResolversMutation,
  },
  DateTime: DateTimeScalar,
};

export default resolvers;
