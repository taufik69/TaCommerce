require("dotenv").config();
const express = require("express");
const router = express.Router();
const multer = require("multer");
const multerUpload = require("../utils/Multer.js");
const cloudinary = require("../utils/Cloudinary.js");
const fs = require("fs");
const registrationValidation = require("../utils/registratrionValidation.js");

router.post("/upload", (req, res, next) => {
  multerUpload(req, res, async function (err) {
    if (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ message: err });
      } else if (err) {
        console.log(err);
        return res.status(400).json({ message: err });
      }
    }
    // File uploaded successfully
    await cloudinary(req.file.path);
    fs.unlinkSync(req.file.path);
    res.status(200).send("File uploaded successfully.");
  });
});

router.route("/registration").post(async (req, res) => {
  try {
    const { value, error } = registrationValidation(req.body);
    if (error) {
      return res.status(401).json({
        message: error.details[0].message,
      });
    }
    console.log(value);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
