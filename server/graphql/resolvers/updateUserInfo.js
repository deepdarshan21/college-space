const User = require("./../../models/users");
const checkAuth = require("./../../utils/checkAuth");

module.exports = async (args, context) => {
    const user = checkAuth(context);

    console.log(args.userInfoInput);

    const res = await User.findOneAndUpdate(
        { username: user.username },
        { ...args.userInfoInput, updatedAt: new Date() }
    );
    if (!res) {
        return new Error("User not found with this username");
    }
    return "Information Updated";
};
