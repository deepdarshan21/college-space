const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type Query {
    hello: String
    getPosts: [Post]
    getPost(postId: ID!): Post
    getPostsOfUser(username: String!): [Post]
    getUserInfo(username: String!): UserInfo!
  }
  type User {
    email: String!
    username: String!
    token: String!
    name: String!
  }
  type UserInfo {
    username: String
    name: String
    surname: String
    email: String
    createdAt: String
    updatedAt: String
    branch: String
    dateOfBirth: String
    bio: String
    about: String
    role: String
    year: String
    interest: String
    achivement: String
    clubs: String
  }
  input UserInfoInput {
    username: String
    name: String
    surname: String
    email: String
    createdAt: String
    updatedAt: String
    branch: String
    dateOfBirth: String
    bio: String
    about: String
    role: String
    year: String
    interest: String
    achivement: String
    clubs: String
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
    updateUserInfo(userInfoInput: UserInfoInput): String!
  }
`);
