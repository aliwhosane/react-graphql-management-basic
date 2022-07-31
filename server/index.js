require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5000;
const colors = require("colors");
const cors = require("cors");

const schema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV == "development" ? true : false,
  }),
);
app.listen(port, console.log(`Server started on port ${port}`));
