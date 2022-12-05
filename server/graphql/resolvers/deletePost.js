const Post = require("./../../models/post");

module.exports = async ({ postId }) => {
    const post = Post.findById(postId);
    console.log(post);
    if (post) {
        await Post.findByIdAndDelete(postId);
        return "Post Deleted";
    } else {
        return new Error("No post found");
    }
};
