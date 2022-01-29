const express = require('express');
const router = express.Router();
const { Upload, GetImage } = require('../controller/uploads')
const upload = require('../middleware/multer')

router.post('/sent', upload.single('Image'), Upload)
router.get('/get', GetImage)

module.exports = router;
