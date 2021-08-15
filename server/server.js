require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log(" Connected to local Database"));

app.use(express.json());

const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);
//So anything that goes to this URL 'localhost:3000/subscibers'
//or anything after it like 'localhost:3000/subscibers/hhhh' will go into this router that is created above

app.listen(3001, () => console.log(" Server has started on port 3001"));
