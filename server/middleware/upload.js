const multer = require('multer')
const fs = require('fs');

const folderPath = './uploads';

if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log('Folder created successfully!');
  } else {
    console.log('Folder already exists.');
  }

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb){
        cb(null,file.originalname)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})

module.exports = upload