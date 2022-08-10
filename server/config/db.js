const mongoose = require("mongoose");

const connectDB = () => {
    mongoose
        .connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            // useCreateIndex: true,
            useUnifiedTopology: true,
        })
        .then((value) => {
            console.log(
                `Connected with MongoDB database:${value.connection.name}`.cyan.underline.bold
            );
        })
        .catch((err) => {
            console.log(`Error in connecting MongoDB: ${err.message}`.red);
            process.exit(1);
        });
};

module.exports = connectDB;
