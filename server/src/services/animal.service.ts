import {Animal, AnimalModelT} from "../models/animal";
import {ObjectId} from "mongoose";

export default class AnimalService {
  private animalModel: AnimalModelT;
  constructor(animalModel: AnimalModelT){
    this.animalModel = animalModel;
  }
  async getAll(): Promise<Animal[]> {
   return this.animalModel.find()
  }
  async createOne(animal: Animal): Promise<Animal>{
    return this.animalModel.create(animal)
  }
  async deleteOne(id: ObjectId): Promise<any> {
   return this.animalModel.deleteOne({ _id: id})
  }
}
