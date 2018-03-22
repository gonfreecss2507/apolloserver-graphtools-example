const express = require('express')
const {makeExecutableSchema} = require('graphql-tools');



const typedef = `
  type Query { books: [Book] }
  type User { id: ID!, name: String! @unique }
  type Book { title: String, author: String }
`;

// Some fake data
const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const resolvers = {
  Query: {
    getbook: () => books
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

