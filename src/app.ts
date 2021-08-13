const express = require('express');
const database = require('./models');

const app = express();

database.authenticate().then(() => {
  console.log('connected to the database');
});

const PORT = 3000;

app.listen(PORT, async () => {
  console.log(`listening on port ${PORT}`, `\nhttp://localhost:${PORT}`);
});
