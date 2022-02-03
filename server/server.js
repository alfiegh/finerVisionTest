import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { readdirSync } from 'fs';

require('dotenv').config();
const morgan = require('morgan');

const app = express();

//Connect to mongoose DB
mongoose
  .connect(process.env.DATABASE)
  .then((res) => console.log('DB Connected'))
  .catch((err) => console.log('DB Error', err));

//app middlewares
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: [process.env.CLIENT_URL] }));

//Autoload any routes
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Running on port ${port}`));
