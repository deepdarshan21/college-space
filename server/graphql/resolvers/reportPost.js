const Post = require("./../../models/post");

module.exports = async (args) => {
    const {
        reportInput: { postId, username },
    } = args;

    const post = await Post.findById(postId);
    if (post) {
        if (!post.report.includes(username)) {
            await post.updateOne({ $push: { report: username } });
            if (post.report.length >= 5) {
                await Post.findByIdAndDelete(postId);
            }
            return "Post Reported Successfully";
        } else {
            return "You already reported";
        }
    } else {
        return new Error("No post found");
    }
};
