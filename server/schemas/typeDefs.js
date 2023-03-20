// Import the gql function from the apollo-server-express package
const { gql } = require('apollo-server-express');

// Define the GraphQL type definitions
const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  
  type Query {
    me: User
  }
  
  type Auth {
    user: User
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookToSave: bookInput): Book
    removeBook(bookId: String!): User
  }
  
  type Book {
    _id: ID!
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  
  input bookInput {
    authors: [String]
    bookId: String
    title: String
    description: String
    image: String
    link: String
  }
`;

module.exports = typeDefs;
