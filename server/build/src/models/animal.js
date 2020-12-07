"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animalSchema = void 0;
const mongoose_1 = require("mongoose");
exports.animalSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    age: { type: Number, default: 0 },
    type: { type: String },
    state: { type: Number }
});
const AnimalModel = mongoose_1.model('Animal', exports.animalSchema);
exports.default = AnimalModel;
//# sourceMappingURL=animal.js.map