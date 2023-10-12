import axiosDownload from "./axiosDownload";

const youtubeApi={
download:(params)=>{axiosDownload.post('download',params)}
}

export default youtubeApi;