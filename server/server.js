const express = require("express");
const PORT = process.env.PORT || 8888;

const app = express();

app.use(express.static("public"));

app.get("/test", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
