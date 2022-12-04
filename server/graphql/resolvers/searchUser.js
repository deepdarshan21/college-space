const User = require("./../../models/users");

module.exports = async (args) => {
    const res = [];
    const userFilter = await User.find({ name: { $regex: `${args.string}`, $options: "i" } }).limit(
        5
    );
    if (userFilter) {
        userFilter.map((doc) => res.push(doc.name));
        return res;
    } else return new Error("Some error found");
};
