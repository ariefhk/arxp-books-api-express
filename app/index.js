const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const app = express();

app.get("/", (req, res) => {
  res.json({ name: "Arief", age: 21 });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
