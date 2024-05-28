
const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/form.html');
});

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    res.send(`Name: ${name}, Email: ${email}`);
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
