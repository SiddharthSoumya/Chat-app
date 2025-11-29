const express = require('express');
const app = express();

app.get('/',(req,res) =>{
    res.send("Server running via Express");
});

app.listen(3000,() => {
    console.log("Listening on port 3000");
});