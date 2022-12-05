const Post = require("./../models/post");
const User = require("./../models/users");

module.exports = async (username) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const posts = await Post.find();
    const user = await User.findOne({ username });
    const userTopics = user.topics;
    const postScore = [];
    posts.map((post) => {
        const postTopics = post.topics;
        let score = 0;
        userTopics.map((userTopic) => {
            if (postTopics.includes(userTopic.topicName)) {
                score += userTopic.topicScore;
            }
        });
        score += post.likes.length;
        score += post.comments.length * 3;
        const diffDays = Math.round(Math.abs((new Date() - post.createdAt) / oneDay));
        score -= diffDays * 2;
        postScore.push(score);
    });
    return postScore;
};
