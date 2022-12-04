const Post = require("./../../models/post");

module.exports = async (args) => {
    console.log(args);
    const {
        likeInput: { postId, username },
    } = args;

    const post = await Post.findById(postId);
    if (post) {
        if (!post.likes.includes(username)) {
            await post.updateOne({ $push: { likes: username } });
            return "Post Liked";
        } else {
            await post.updateOne({ $pull: { likes: username } });
            return "Post Disliked";
        }
        console.log(post.likes);
        return "Post Found";
    } else {
        return new Error("No post found");
    }
};
