const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// this is a change to apps/backend

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
