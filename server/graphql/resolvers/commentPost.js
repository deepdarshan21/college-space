const Post = require("./../../models/post");

module.exports = async (args) => {
    const {
        commentInput: { postId, body, username },
    } = args;

    const post = await Post.findById(postId);
    if (post) {
        await post.updateOne({ $push: { comments: {body, username, createdAt: new Date()} } });
        return "Comment on post";
    } else {
        return new Error("No post found");
    }
};
