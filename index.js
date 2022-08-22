const express = require("express");
const app = express();
const mongoose = require("mongoose");
const conn = async (req, res, next) => {
  try {
    await mongoose

      .connect(
        "mongodb+srv://rafiullah786:salams.brothers@cluster0.jjv7rsk.mongodb.net/blog?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log("Connected to MongoDB");
      });
  } catch (error) {
    res.send("Error connecting to MongoDB");
    console.log(error);
  }
};
conn();

app
  .get("/", (req, res) => {
    res.send("Hello World");
  })
  .listen(3000, () => {
    console.log("Server started on port 3000");
  });
