const express = require('express');
const app = express();
const port = 9000; 


app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

app.get('/contact', (req, res) => {
  res.send('Contact us at pranav7@gmail.com');
});

app.get('/products', (req, res) => {
  res.send('Check out our latest products here.');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});