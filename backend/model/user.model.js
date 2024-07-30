const mongoose = require("mongoose");
const { Schema } = mongoose();

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

const usermodel = mongoose.model("user", userSchema);
module.exports = { usermodel };
