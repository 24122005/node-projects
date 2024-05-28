// app.js
const express = require('express');
const app = express();
const port = 5700;

const records = [];

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/form.html');
});

app.get('/records', (req, res) => {
    res.json(records);
});

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    const newRecord = { _id: Date.now(), name, email };
    records.push(newRecord);
    res.redirect('/');
});

app.delete('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = records.findIndex(record => record._id === id);
    if (index !== -1) {
        records.splice(index, 1);
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
