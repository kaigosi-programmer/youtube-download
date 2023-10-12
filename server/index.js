const express = require('express');
const cors=require('cors');


const PORT=8000;
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // クライアントのオリジン
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 許可するHTTPメソッド
    credentials: true, // 許可するクッキーを含むリクエスト
}))

app.use('/api',require('./src/routes'));


app.listen(PORT,()=>{
    console.log(`${PORT}でサーバーが起動しました`);
});


