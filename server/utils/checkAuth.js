const jwt = require("jsonwebtoken");

module.exports = (context) => {
    const authHeader = context.authorization;
    if (authHeader) {
        // Bearer ....
        const token = authHeader.split("Bearer ")[1];
        if (token) {
            try {
                const user = jwt.verify(token, process.env.JWTSECRET);
                return user;
            } catch (err) {
                throw new Error("Invalid/Expired token");
            }
        }
        throw new Error("Authentication token must be 'Bearer [token]");
    }
    throw new Error("Authorization header must be provided");
};
