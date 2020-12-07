"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app_1 = __importDefault(require("./config/app"));
const dotenv_1 = require("./config/dotenv");
const mongoose_1 = __importDefault(require("mongoose"));
// Create a new express app instance
const app = express_1.default();
app_1.default(app, express_1.default);
routes_1.default(app);
//mongo config
mongoose_1.default
    .connect(dotenv_1.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(() => console.info('Data base online'))
    .catch((error) => console.error(error));
exports.default = app;
//# sourceMappingURL=app.js.map