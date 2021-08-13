const express = require('express');
import db from './models';
import { seedPost } from './models/seeder';

const app = express();

db.authenticate().then(() => {
  console.log('connected to the database');
});

const PORT = 3000;

app.listen(PORT, async () => {
  await db.sync({ force: true });
  await seedPost();
  console.log(`listening on port ${PORT}`, `\nhttp://localhost:${PORT}`);
});
