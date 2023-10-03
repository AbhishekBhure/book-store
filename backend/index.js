import express from "express";
import { PORT, mongoUrl } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();

//Middleware for parsing req body into json
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(234).send("Welcome to Book Store");
});

app.post("/api/book", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "All fields are required ",
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);

    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.send(500).send({ message: error.message });
  }
});

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
