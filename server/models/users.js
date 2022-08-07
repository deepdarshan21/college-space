const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: "String",
        trim: true,
        required: [true, "Empty Name Field"],
        match: [/[A-Z][a-z]\s*/, "Invalid Name"],
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "Empty Email Field"],
        // match: [/^[a-z0-9.]+@smvdu.ac.in$/, "Invalid Email"],
    },
    password: {
        type: "String",
        required: [true, "Empty Password Field"],
    },
});

const User = new mongoose.model("users", userSchema);

User.createIndexes();

module.exports = User;
