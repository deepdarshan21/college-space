const User = require("./../../models/users");

module.exports = async ({ username }) => {
    const res = await User.findOne({ username });
    if (!res) {
        return new Error("User not found with this username");
    }

    console.log(res);

    return {
        username: res.username || "",
        name: res.name || "",
        surname: res.surname || "",
        email: res.email || "",
        createdAt: res.createdAt || "",
        updatedAt: res.updatedAt || "",
        branch: res.branch || "",
        dateOfBirth: res.dateOfBirth || "",
        bio: res.bio || "",
        about: res.about || "",
        role: res.role || "",
        year: res.year || "",
        interest: res.interest || "",
        achivement: res.achivement || "",
        clubs: res.clubs || "",
    };
};
