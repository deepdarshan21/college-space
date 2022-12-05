const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Empty Name Field"],
        match: [/[A-Z][a-z]\s*/, "Invalid Name"],
    },
    surname: {
        type: String,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "Empty Email Field"],
        // match: [
        //     /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/,
        //     "Invalid Email",
        // ],
    },
    username: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "Empty Username"],
        match: [/^[\w](?!.*?\.{2})[\w.]{1,28}[\w]$/, "Invalid Username"],
    },
    password: {
        type: String,
        required: [true, "Empty Password Field"],
        default: null,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    updatedAt: {
        type: Date,
        required: true,
    },
    branch: {
        type: String,
    },
    dateOfBirth: {
        type: Date,
    },
    bio: {
        type: String,
    },
    about: {
        type: String,
    },
    role: {
        type: String,
    },
    year: {
        type: Number,
    },
    interest: {
        type: String,
    },
    achivement: {
        type: String,
    },
    clubs: {
        type: String,
    },
    profilePic: {
        type: String,
    },
    topics: [
        {
            topicName: {
                type: String,
                required: true,
            },
            topicScore: {
                type: Number,
                required: true,
                default: 0,
            },
        },
    ],
});

const User = new mongoose.model("users", userSchema);

User.createIndexes();

module.exports = User;
