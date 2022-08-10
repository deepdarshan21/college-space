const hello = require("./hello");
const register = require("./register");
const login = require("./login");
const addPost = require("./addPost");
const getPosts = require("./getPosts");

module.exports = {
    hello: hello,
    register: register,
    login: login,
    addPost: addPost,
    getPosts: getPosts,
};
