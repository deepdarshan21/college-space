const User = require("./../../models/users");
const topics = require("./../../utils/topics");
const bcrypt = require("bcrypt");

module.exports = async (args) => {
    const {
        registerInput: { name, surname, username, password, email },
    } = args;

    const isUserNameExits = await User.findOne({ username });
    if (isUserNameExits) {
        console.log(isUserNameExits);
        return new Error("This username is taken");
    }

    const isEmailExits = await User.findOne({ email });
    if (isEmailExits) {
        return new Error("This email already exits");
    }

    const newUser = new User({
        name,
        surname,
        username,
        password: await bcrypt.hash(password, 10),
        email,
        createdAt: new Date(),
        updatedAt: new Date(),
        topics,
    });

    const res = await newUser.save();

    return {
        username: res.username,
        email: res.email,
    };
};
