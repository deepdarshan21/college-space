const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type Query {
    hello: String
  }
  type User {
    email: String!
    username: String!
  }
  input RegisterInput {
    name: String!
    surname: String!
    username: String!
    password: String!
    email: String!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
  }
`);
