const Post = require("./../../models/post");
const User = require("./../../models/users");

module.exports = async (args) => {
    const {
        likeInput: { postId, username },
    } = args;

    const post = await Post.findById(postId);
    if (post) {
        if (!post.likes.includes(username)) {
            await post.updateOne({ $push: { likes: username } });
            const user = await User.findOne({ username });
            const userTopics = user.topics;
            const postTopics = post.topics;
            userTopics.map((userTopic) => {
                if (postTopics.includes(userTopic.topicName)) {
                    userTopic.topicScore += 1;
                }
            });
            await user.save();
            return "Post Liked";
        } else {
            await post.updateOne({ $pull: { likes: username } });
            const user = await User.findOne({ username });
            const userTopics = user.topics;
            const postTopics = post.topics;
            userTopics.map((userTopic) => {
                if (postTopics.includes(userTopic.topicName)) {
                    userTopic.topicScore -= 1;
                }
            });
            await user.save();
            return "Post Disliked";
        }
        console.log(post.likes);
        return "Post Found";
    } else {
        return new Error("No post found");
    }
};
