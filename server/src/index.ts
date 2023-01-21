import express from "express";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());

app.get("/", async (req, res) => {
  res.send(`Hello, time! The time from the DB is no`);
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post("/create_user_event", async (req, res) => {
  console.log(req.body);
  res.send(`Hello, World`);
});
