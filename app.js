const express = require("express");
const app = express();

const mongoose = require("mongoose");
const { DB_URL } = require("./constants/config");

const StudentRoutes = require("./routes/student");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/student", StudentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Express running in port", PORT);
});

mongoose.connect(DB_URL, (err) => {
  if (err) {
    console.log(err);
    process.exit(0);
  }

  console.log("Mongoose Connected.");
});

// AFjJDFwe5Ymfm7nJ
