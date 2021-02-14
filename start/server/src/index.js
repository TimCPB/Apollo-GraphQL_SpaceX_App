const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

require('dotenv').config();

const server = new ApolloServer({ typeDefs });
