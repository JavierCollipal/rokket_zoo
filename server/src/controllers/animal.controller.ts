import {Request, Response} from "express";

export default class AnimalController {
  private animalService: any;
  constructor(animalService: any){
    this.animalService  = animalService
  }
  async getAll(req: Request, res: Response): Promise<any> {
   const foundAnimals = await this.animalService.getAll();
   return res.status(200).json({animals: foundAnimals})
  }
  async createOne(req: Request, res: Response): Promise<any>{

  }
  async deleteOne(req: Request, res: Response): Promise<any> {

  }
}
