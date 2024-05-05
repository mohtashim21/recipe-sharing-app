const express = require('express');

const server = express();
const port = 8000;

server.get('/', (req,res) => {
    res.send("Home route");
})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})