import 'dotenv/config';
import cors from 'cors';
import helmet from 'helmet';
import express from 'express';

const app = express();
app.use(cors());
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});
