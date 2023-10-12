const fs=require('fs');
const ytdl =require('ytdl-core');

const options = {
    quality: 'highest',
    filter: 'audioandvideo',
};

exports.downloadMovie = async (req,res,next) => {
    const {videoURL,videoTitle,username} = req.body;
    const outputpath=`/Users/iriehiroki/Movies/${videoTitle}.mp4`;
    if(!videoURL)return res.status(400).json({err:"情報が不足しています"});
    try {
        await ytdl(videoURL, options)
            .pipe(fs.createWriteStream(outputpath))
            .on('finish', () => { res.status(200).json({msg:"ダウンロードが完了しました"})});
    } catch (error) {
        res.status(500).send("ダウンロード中にエラーが発生しました");
    }
};

