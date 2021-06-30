const express = require("express");
const ingredientRoutes = require("./routes/ingredientRoutes");
const app = express();

const cors = require("cors");
const path = require("path");

app.use("/cuisines", cuisines);
app.use("/ingredients", ingredients);
app.use("/media", express.static("media"));
app.use("/media", express.static(path.join(__dirname, "media")));

app.use((req, res, next) => {
  res.status(404).json({ message: "page do not exist/ invalid url" });
});
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal server Error" });
});

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
