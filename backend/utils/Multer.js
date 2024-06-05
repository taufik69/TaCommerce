const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random());
    cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);
  },
});

// file validation
const uploadFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb("Unsupported File Format", false);
  }
};
const upload = multer({
  storage: storage,
  fileFilter: uploadFilter,
  limits: { fileSize: 1024 * 1024 },
}).single("avatar");
module.exports = upload;
