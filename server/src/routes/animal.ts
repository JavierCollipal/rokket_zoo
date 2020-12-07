import express, { Request, Response } from 'express'
import AnimalController from "../controllers/animal.controller";
import AnimalService from "../services/animal.service";

const animalService = new AnimalService({});
const animalController = new AnimalController(animalService);

const animalRouter = express.Router();

animalRouter.get('/animal', (req: Request, res: Response) => animalController.getAll(req,res))
animalRouter.post('/animal', (req: Request, res: Response) => animalController.createOne(req,res))
animalRouter.delete('/animal/:id', (req: Request, res: Response) => animalController.deleteOne(req,res))

export default  animalRouter;
