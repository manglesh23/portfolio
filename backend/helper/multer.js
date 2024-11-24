const path = require("path");
const multer = require("multer");

//Uploaded the file into local server and then the path into mongo dataabse

const uploadDatafile = () => {
  try {
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "CVFolder");              // Folder to store uploaded files
      },
      filename: (req, file, cb) => {
        cb(null, `${file.originalname}`);
      },
    });

    const uploadDatafile = multer({ storage });
    return uploadDatafile;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { uploadDatafile };
