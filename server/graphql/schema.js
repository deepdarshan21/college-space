const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type Query {
    hello: String
    getPosts: [Post]
    getPost(postId: ID!): Post
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
  type Like {
    username: String!
    createdAt: String!
  }
  type Comments {
    body: String!
    username: String!
    createdAt: String!
  }
  type Post {
    body: String!
    username: String!
    createdAt: String!
    likes: [Like]
    comments: [Comments]
  }
  input PostInput {
    body: String!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(loginInput: LoginInput): User!
    addPost(postInput: PostInput): String!
  }
`);
