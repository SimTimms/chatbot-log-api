const typeDefs = `#graphql
############################
### SCALARS
############################

    scalar DateTime

############################
### LOG SCHEMA
############################
type Log {
    _id: ID!
    logMessage: String
    aiResponse: String
    sessionId: String
    logType: String 
    createdAt: DateTime # ISO 8601 format
    updatedAt: DateTime # ISO 8601 format
}

input LogInput {
    logMessage: String!
    aiResponse: String!
    sessionId: String!
    logType: String!
}


input LogFilter {
    _id: String
    logMessage: String
    aiResponse: String
    logType: String 
    sessionId: String 
    startDate: DateTime # ISO 8601 format
    endDate: DateTime # ISO 8601 format
}

    
############################
### QUERIES
############################

    type Query{
        getLog(_id:String!):Log
        getLogs:[Log]
        filterLogs(filter:LogFilter):[Log]
    }

############################
### MUTATIONS
############################

    type Mutation{
        createLog(input:LogInput!):Log
    }
`;
export default typeDefs;
