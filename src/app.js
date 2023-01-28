const express = require("express");
require("./db/conn");
const mensRankings = require("./models/mens");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("hello from raghav!");
});

app.post("/mens", async (req, res) => {
  try {
    const addingMensRecords = new mensRankings(req.body);
    console.log(req.body);
    addingMensRecords.save();
  } catch (e) {
    res.send(e);
  }
});

app.listen(port, () => {
  console.log(`connection is live at port no. ${port}`);
});
