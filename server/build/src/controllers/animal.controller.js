"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AnimalController {
    constructor(animalService) {
        this.animalService = animalService;
    }
    async getAll(req, res) {
        try {
            const foundAnimals = await this.animalService.getAll();
            return res.status(200).json({ animals: foundAnimals });
        }
        catch (e) {
            console.error(e);
        }
    }
    async createOne(req, res) {
        try {
            const savedAnimal = await this.animalService.createOne(req.body);
            return res.status(201).json({ animal: savedAnimal });
        }
        catch (e) {
            console.error(e);
        }
    }
    async deleteOne(req, res) {
        try {
            const { id } = req.params;
            await this.animalService.deleteOne(id);
            return res.sendStatus(204);
        }
        catch (e) {
            console.error(e);
        }
    }
}
exports.default = AnimalController;
//# sourceMappingURL=animal.controller.js.map