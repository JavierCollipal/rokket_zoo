import {Application} from "express";
import {apiVersion} from "../constants";
import animalRouter from "./animal";

export default function (app: Application): void {
  app.use(apiVersion, animalRouter)
}
