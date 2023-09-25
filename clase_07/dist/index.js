"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controllers/controller");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/log', controller_1.logController);
app.post('/log', controller_1.postController);
app.patch('/log', controller_1.logController);
app.get("/user", controller_1.newRouteController);
app.listen(3000, () => {
    console.log("Server on");
});
