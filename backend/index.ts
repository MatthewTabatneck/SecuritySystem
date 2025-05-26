import express from 'express';

const app = express();

app.get('/', (_, res) => {
  res.send('Hello from backend!');
});

app.listen(3001, () => {
  console.log('Server is running at http://localhost:3001');
});