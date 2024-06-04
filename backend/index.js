const express = require("express");
const app = express();
const cors = require("cors");
const uploadImage = require("./utils/Cloudinary");

require("dotenv").config();
/**
 * todo : calling nesseary middleware
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/upload", (req, res) => {
  console.log(req.files);
});

app.listen(process.env.PORT || 5000, () => {
  console.log("server running on port " + process.env.PORT);
});
