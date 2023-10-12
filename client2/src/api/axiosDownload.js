import axios from 'axios';

const BASE_URL="http://localhost:8000/api";

const  axiosDownload=axios.create({
    baseURL:BASE_URL,
});

axiosDownload.interceptors.response.use((response)=>{
    return response.data
},
(err)=>{
    throw err.response;
});

export default axiosDownload;