const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");

const connectDB = require("./config/db");

dotenv.config({ path: "./../.env.local" });

connectDB();

const app = express();

const corsOptions = {
    origin: true,
    credentials: true,
};

app.options("*", cors(corsOptions));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.get("/", (req, res) => {
    res.send("Up and running");
});

const schema = require("./graphql/schema");

const root = require("./graphql/resolvers");

app.use(
    "/graphql",
    graphqlHTTP((req, res, graphQLParams) => {
        return {
            schema: schema,
            rootValue: root,
            graphiql: true,
            context: {
                authorization: req.headers.authorization,
                // whatever else you want
            },
        };
    })
);

// const authRoute = require("./routes/auth");
// const userRoute = require("./routes/user");

// app.use("/auth", authRoute);
// app.use("/user", userRoute);

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server is up and running at port ${PORT}`));
