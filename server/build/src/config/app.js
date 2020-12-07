"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//all things related to app and express config can be included here, generating a cleaner app.ts
const appConfig = (app, express) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
};
exports.default = appConfig;
//# sourceMappingURL=app.js.map