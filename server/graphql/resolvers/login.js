const User = require("./../../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = async (args) => {
    const {
        loginInput: { username, password, email },
    } = args;

    console.log(username, password, email);

    const isUserNameExits = await User.findOne({ username });
    if (isUserNameExits) {
        console.log("Username match");
        const isPasswordMatch = await bcrypt.compare(password, isUserNameExits.password);
        if (isPasswordMatch) {
            const token = jwt.sign(
                {
                    id: isUserNameExits._id,
                    email: isUserNameExits.email,
                    username: isUserNameExits.username,
                },
                process.env.JWTSECRET
            );

            return {
                username: isUserNameExits.username,
                name: isUserNameExits.name,
                token,
            };
        } else {
            return new Error("Username/password not matchs");
        }
    }

    const isEmailExits = await User.findOne({ email });
    if (isEmailExits) {
        console.log("email match");
        const isPasswordMatch = await bcrypt.compare(password, isEmailExits.password);
        if (isPasswordMatch) {
            const token = jwt.sign(
                {
                    id: isEmailExits._id,
                    email: isEmailExits.email,
                    username: isEmailExits.username,
                },
                process.env.JWTSECRET
            );

            return {
                username: isEmailExits.username,
                name: isEmailExits.name,
                token,
            };
        } else {
            return new Error("Email/password not matchs");
        }
    }

    return new Error("User not found");
};
