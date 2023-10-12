const express = require('express');


const PORT=8000;
const app = express();
app.use(express.json());


app.use('/api',require('./src/routes'));


app.listen(PORT,()=>{
    console.log(`${PORT}でサーバーが起動しました`);
});


