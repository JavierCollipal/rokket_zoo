import express, {Application} from 'express'
import routes from './routes';
import appConfig from "./config/app";

// Create a new express app instance
const app: Application = express();

appConfig(app, express)
routes(app);

export default app;
