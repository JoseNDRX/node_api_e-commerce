const multer = require("multer");

const types = ["image/png", "image/jpeg"];

const upload = multer({
  storage: multer.diskStorage({
    destination: "./files",
    filename: (req, file, callback) => {
      const date = Date.now();
      callback(null, `${date}- ${file.originalname}`);
    },
  }),
  limits: {
    fileSize: 1000000,
  },
  fileFilter: (req, file, callback) => {
    if (!types.includes(file.mimetype)) {
      callback({
        error: "file not soported",
        message: `Only ${types.join(", ")} mimetypes are allowed`,
      });
    }
    callback(null, true);
  },
}).single("image");

module.exports = upload;
