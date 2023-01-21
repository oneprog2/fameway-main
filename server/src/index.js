const express = require("express");
const app = express();

app.use(express.json());

const server = app.listen(6966, () => {
  console.log("server listening on port 8000");
});

app.post("/users_created_event", async (req, res) => {
  console.log(req.body);
  console.log("t'es un bg");
});
