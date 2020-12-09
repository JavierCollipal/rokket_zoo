import { Application } from "express";
import cors from 'cors';
//all things related to app and express config can be included here, generating a cleaner app.ts
const appConfig = (app: Application, express: any) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors())
}

export default appConfig
