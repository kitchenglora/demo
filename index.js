const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res)=>{
    res.send("Hello express 3");
})

app.listen(3000, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
})