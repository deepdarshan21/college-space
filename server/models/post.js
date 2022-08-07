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
    likes: [
        {
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
