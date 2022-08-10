const Post = require("./../../models/post");

module.exports = async (args) => {
    const {
        postInput: { body, username },
    } = args;

    const newPost = new Post({
        body,
        username,
        createdAt: new Date(),
        likes: [],
        comments: [],
    });

    const res = await newPost.save();

    return "Post added successfully";
};
