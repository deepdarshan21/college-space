const Post = require("../../models/post");

module.exports = async ({ username }) => {
    const posts = await Post.find({ username }).sort({ createdAt: -1 });
    return posts;
};
