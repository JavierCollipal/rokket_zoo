"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// Create a new express app instance
var app = express_1.default();
app.get('/', function (req, res) {
    res.send('Hola mundo!');
});
app.listen(3000, function () {
    console.log("App is listening in port 3000!");
});
