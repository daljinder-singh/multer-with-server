const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
     var dir = '../public/images';
  
        if(!fs.existsSync(dir)){
             fs.mkdirSync(dir);
         }
      callback(null, dir)
    },
    filename: function (req, file, callback) {
      callback(null,Date.now() + '-' + file.originalname )
    }
  });
  
const upload = multer({storage : storage});


module.exports = upload;


