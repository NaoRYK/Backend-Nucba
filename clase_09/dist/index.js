"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pokemon_1 = require("./controllers/pokemon");
const app = (0, express_1.default)();
const PORT = 8080;
app.use(express_1.default.json());
app.listen(PORT, () => {
    console.log(`server corriendo en ${PORT}`);
});
app.get("/pokemon/full/:id", pokemon_1.getPokemonById);
app.get("/pokemon/simple/:id", pokemon_1.getSimplePokemonById);
app.get("/pokemon/multiple", pokemon_1.getMultiplePokemon);
