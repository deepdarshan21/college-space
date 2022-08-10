const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type Query {
    hello: String
  }
  type User {
    email: String!
    username: String!
    token: String!
  }
  input RegisterInput {
    name: String!
    surname: String!
    username: String!
    password: String!
    email: String!
  }
  input LoginInput {
    username: String
    email: String
    password: String!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(loginInput: LoginInput): User!
  }
`);
