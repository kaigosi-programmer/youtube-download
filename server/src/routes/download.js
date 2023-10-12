const express=require('express');
const{downloadMovie}=require('../../utils/downloadMovie');
const router = express.Router();


router.post('/',downloadMovie);

module.exports = router;