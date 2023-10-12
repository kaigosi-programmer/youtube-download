const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const username = req.body.username || 'defaultUser';
        const userDirectry = path.join(__dirname, 'uploads', username);
        if (!fs.existsSync(userDirectry)) {
            try {
                fs.mkdirSync(userDirectry, { recursive: true });
               return cb(null, userDirectry);
            } catch (err) {
              return  cb(err, null)
            }
        } else {
            cb(null, userDirectry);
        }
    },
    filename: (req, file, cb) => {
        try{
           return cb(null, file.originalname);
        }catch(err){
           return cb(err,null)
        }
        
    }
});

exports.upload = multer({ storage: storage });

