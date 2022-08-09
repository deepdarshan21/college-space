const User = require("./../../models/users");
const bcrypt = require("bcrypt");

module.exports = async (args) => {
    // TODO: Check for duplicates
    // TODO: Hash the password
    // TODO: Save the user into database
    const {
        registerInput: { name, surname, username, password, email },
    } = args;


    const newUser = new User({
        name,
        surname,
        username,
        password: await bcrypt.hash(password, 10),
        email,
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    const res = await newUser.save();

    return {
        username: res.username,
        email: res.email,
    };
};
