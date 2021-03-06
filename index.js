const express = require('express');

const app = express();


//Responde with "hello world" for requests that hit our root
app.get('/', (req, res) => {
    res.send('Hello World');
});

//listen to port 3000 by default
app.listen(process.env.PORT || 3001);

module.exports = app;