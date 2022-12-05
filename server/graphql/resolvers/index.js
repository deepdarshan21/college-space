const hello = require("./hello");
const register = require("./register");
const login = require("./login");
const addPost = require("./addPost");
const getPosts = require("./getPosts");
const getPost = require("./getPost");
const getPostsOfUser = require("./getPostsOfUser");
const getUserInfo = require("./getUserInfo");
const updateUserInfo = require("./updateUserInfo");
const likePost = require("./likePost");
const deletePost = require("./deletePost");
const reportPost = require("./reportPost");
const commentPost = require("./commentPost");
const searchUser = require("./searchUser");
const getTopics = require("./getTopics");

module.exports = {
    hello: hello,
    register: register,
    login: login,
    addPost: addPost,
    getPosts: getPosts,
    getPost: getPost,
    getPostsOfUser: getPostsOfUser,
    getUserInfo: getUserInfo,
    updateUserInfo: updateUserInfo,
    likePost: likePost,
    commentPost: commentPost,
    deletePost: deletePost,
    reportPost: reportPost,
    searchUser: searchUser,
    getTopics: getTopics,
};
