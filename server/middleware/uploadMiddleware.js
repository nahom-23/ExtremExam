const multer = require("multer");
const { CloudinaryStorage } = require("multer-Storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "category-photo",
    allowedFormats: ["jpg", "png", "jpeg"],
  },
});
const upload = multer({ storage: storage });

module.exports = upload;
