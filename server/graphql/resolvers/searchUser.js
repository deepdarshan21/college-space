const User = require("./../../models/users");

module.exports = async (args) => {
    const res = [];
    const userFilter = await User.find({ name: { $regex: `${args.string}`, $options: "i" } }).limit(
        5
    );
    if (userFilter) {
        userFilter.map((doc) => res.push({ name: doc.name, username: doc.username }));
        return res;
    } else return new Error("Some error found");
};
