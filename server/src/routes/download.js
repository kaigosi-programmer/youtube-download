const express=require('express');
const{downloadMovie}=require('../../utils/downloadMovie');
const router = express.Router();
const {upload} = require('../../utils/multer');


router.post('/', upload.single('video'),downloadMovie);

module.exports = router;