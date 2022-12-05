const Post = require("./../../models/post");
const checkAuth = require("./../../utils/checkAuth");

module.exports = async (args, context) => {
    const {
        postInput: { body, topics },
    } = args;
    console.log(context);
    const user = checkAuth(context);

    const newPost = new Post({
        body,
        username: user.username,
        user: user.id,
        createdAt: new Date(),
        likes: [],
        comments: [],
        topics,
    });

    const res = await newPost.save();

    return "Post added successfully";
};
