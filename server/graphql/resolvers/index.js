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
    deletePost: deletePost,
};
