export default class AnimalService {
  private animalModel: any
  constructor(animalModel){
    this.animalModel = animalModel;
  }
  async getAll(): Promise<any> {
   return ["gato","perro","cocodrilo"]
  }
  async createOne(): Promise<any>{

  }
  async deleteOne(): Promise<any> {

  }
}
