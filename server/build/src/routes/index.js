"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const animal_1 = __importDefault(require("./animal"));
function default_1(app) {
    app.use(constants_1.apiVersion, animal_1.default);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map