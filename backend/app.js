const express = require("express");
const path = require("path");

const app = express();

// serve frontend folder
app.use(express.static(path.join(__dirname, "../frontend")));

// route for homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});