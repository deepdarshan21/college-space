const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    },
    body: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    likes: {
        type: Array,
        default: [],
    },
    comments: [
        {
            body: {
                type: String,
                required: true,
            },
            username: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                required: true,
            },
        },
    ],
});

const Post = new mongoose.model("posts", postSchema);

Post.createIndexes();

module.exports = Post;
