const express = require('express');

const petData = require('./db/animals.json');

const PORT = 3001;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));



app.get('/api/pets', (req, res) => res.json(petData));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
