const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use(require('./routes/apiroutes'));
app.use(require('./routes/htmlroutes'));


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
