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
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif"];
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true); // Allow the file
    } else {
      cb(new Error("Invalid file type. Only image files are allowed."), false);
    }
  },
});

module.exports = upload;
