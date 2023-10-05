import express from "express";
import { PORT, mongoUrl } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";

const app = express();

//Middleware for parsing req body into json
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(234).send("Welcome to Book Store");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("App is Conneted to the database");
    app.listen(PORT, () => {
      console.log(`App is listening to port ${PORT}`);
    });
  })
  .catch((erorr) => {
    console.log(erorr);
  });
