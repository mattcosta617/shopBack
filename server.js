const express = require('express');
const app = express();

app.get('/data', (request, response) => {
    response.send('here is your information');
});

app.listen(3000, ()=>{
    console.log("I am listening");
});