const Post = require("./../../models/post");
const User = require("./../../models/users");

module.exports = async (args) => {
    const {
        commentInput: { postId, body, username },
    } = args;

    const post = await Post.findById(postId);
    if (post) {
        await post.updateOne({ $push: { comments: { body, username, createdAt: new Date() } } });
        const user = await User.findOne({ username });
        const userTopics = user.topics;
        const postTopics = post.topics;
        userTopics.map((userTopic) => {
            if (postTopics.includes(userTopic.topicName)) {
                userTopic.topicScore += 3;
            }
        });
        await user.save();
        return "Comment on post";
    } else {
        return new Error("No post found");
    }
};
