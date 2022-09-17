import express from "express";
import data from "./Data.js";

const app = express();

app.get("/products-API", function (req, res) {
  res.send(data.products);
});

const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log(`server at http://localhost:${port}`);
});
