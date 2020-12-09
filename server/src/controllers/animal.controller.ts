import {Request, Response} from "express";

export default class AnimalController {
  //note, investigate how to made an type or interface for Service classes
  private animalService: any;

  constructor(animalService: any) {
    this.animalService = animalService
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const foundAnimals = await this.animalService.getAll();
      return res.status(200).json({animals: foundAnimals})
    } catch (e) {
      console.error(e)
    }
  }

  async createOne(req: Request, res: Response): Promise<Response> {
    try {
      const savedAnimal = await this.animalService.createOne(req.body);
      return res.status(201).json({animal: savedAnimal})
    } catch (e) {
      console.error(e)
    }
  }

  async deleteOne(req: Request, res: Response): Promise<Response> {
    try {
      const {id} = req.params;
      await this.animalService.deleteOne(id)
      return res.sendStatus(204)
    } catch (e) {
      console.error(e)
    }
  }
}
