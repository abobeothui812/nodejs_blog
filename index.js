const express = require('express')
const app = express();
const port = 3000;

app.get('/dashboard', (req, res) => {
    var a=1;
    var b=2;
    var c=a+b;
    res.send('Hello World vietnam 1111!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});