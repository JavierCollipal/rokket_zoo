"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AnimalService {
    constructor(animalModel) {
        this.animalModel = animalModel;
    }
    async getAll() {
        return this.animalModel.find();
    }
    async createOne(animal) {
        return this.animalModel.create(animal);
    }
    async deleteOne(id) {
        return this.animalModel.deleteOne({ _id: id });
    }
}
exports.default = AnimalService;
//# sourceMappingURL=animal.service.js.map