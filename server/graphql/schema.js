const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type Query {
    hello: String
    getPosts(username: String!): [Post]
    getPost(postId: ID!): Post
    getPostsOfUser(username: String!): [Post]
    getUserInfo(username: String!): UserInfo!
    searchUser(string: String!): [UserSearch]
    getTopics: [String]
  }
  type UserSearch{
    name: String
    username: String
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
  type Comments {
    body: String!
    username: String!
    createdAt: String!
  }
  input CommentInput{
    postId: ID!
    body: String!
    username: String!
    createdAt: String
  }
  type Post {
    _id: String!
    body: String!
    username: String!
    createdAt: String!
    likes: [String]
    comments: [Comments]
  }
  input PostInput {
    body: String!
    topics: [String]
  }
  input LikeInput{
    postId: ID!
    username: String!
  }
  input ReportInput{
    postId: ID!
    username: String!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(loginInput: LoginInput): User!
    addPost(postInput: PostInput): String!
    updateUserInfo(userInfoInput: UserInfoInput): String!
    likePost(likeInput: LikeInput!): String!
    commentPost(commentInput: CommentInput): String!
    deletePost(postId: ID!): String!
    reportPost(reportInput: ReportInput!): String!
  }
`);
