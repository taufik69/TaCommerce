const express = require("express");
const app = express();
const cors = require("cors");

const AllRoutes = require("./Routes/api");

require("dotenv").config();
/**
 * todo : calling nesseary middleware
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/v1", AllRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("server running on port " + process.env.PORT);
});
