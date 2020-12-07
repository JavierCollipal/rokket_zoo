import express, {Application} from 'express'
import routes from './routes';
import appConfig from "./config/app";
import {mongo_url} from "./config/dotenv";
import mongoose from 'mongoose'

// Create a new express app instance
const app: Application = express();

appConfig(app, express)
routes(app);
//mongo config

mongoose
  .connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.info('Data base online'))
  .catch((error) => console.error(error))

export default app;
