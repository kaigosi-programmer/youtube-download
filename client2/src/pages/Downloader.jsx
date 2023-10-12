import React from 'react';
import { TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/material';
import youtubeApi from '../api/youtubeApi';

function Downloader() {
  const videoDownload = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const videoURL = data.get('videoURL');
    const videoTitle = data.get('videoTitle');
    try {
    const result=  await youtubeApi.download({ videoURL, videoTitle });
      alert('ダウンロードに成功しました');
    } catch (err) {
      alert(err);
    }
  }
  return (
    <Box onSubmit={videoDownload} component="form" sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <TextField required name="videoURL" fullWidth label="youtube動画のURL" type="url" margin="normal"></TextField>
      <TextField required name="videoTitle" fullWidth label="ファイル名" margin="normal"></TextField>

      <LoadingButton type="submit" variant='outlined'>保存する</LoadingButton>
    </Box>
  )
}

export default Downloader