"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const animal_controller_1 = __importDefault(require("../controllers/animal.controller"));
const animal_service_1 = __importDefault(require("../services/animal.service"));
const animal_1 = __importDefault(require("../models/animal"));
const animalService = new animal_service_1.default(animal_1.default);
const animalController = new animal_controller_1.default(animalService);
const animalRouter = express_1.default.Router();
animalRouter.get('/animal', (req, res) => animalController.getAll(req, res));
animalRouter.post('/animal', (req, res) => animalController.createOne(req, res));
animalRouter.delete('/animal/:id', (req, res) => animalController.deleteOne(req, res));
exports.default = animalRouter;
//# sourceMappingURL=animal.js.map