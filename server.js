const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();
const API_KEY = process.env.MONGO_KEY;
const cors = require("cors");
const path = require("path");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// require routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/items", require("./routes/items"));
app.use("/uploads", express.static("uploads"));
if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static("client/build"));

  // Express serve up index.html file if it doesn't recognize route
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
mongoose
  .connect(API_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5001; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
