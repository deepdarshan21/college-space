const Post = require("./../../models/post");
const postScore = require("./../../utils/postScore");

module.exports = async () => {
    const posts = await Post.find();
    scores = await postScore("shivam");
    // console.log(scores);
    posts.sort(function (x, y) {
        let i = posts.indexOf(x),
            j = posts.indexOf(y);
        console.log(scores[i], scores[j]);
        if (scores[i] < scores[j]) {
            return 1;
        }
        if (scores[i] > scores[j]) {
            return -1;
        }
        return 0;
    });
    // return scores
    return posts;
};
