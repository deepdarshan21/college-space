const Post = require("./../../models/post");

module.exports = async ({postId}) => {
    const post = await Post.findById(postId);
    if (post) {
        return post;
    } else {
        return new Error("No post found");
    }
};
