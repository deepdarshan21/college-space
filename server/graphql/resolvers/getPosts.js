const Post = require("./../../models/post");

module.exports = async () => {
    const posts = await Post.find().sort({createdAt: -1});
    return posts;
};
