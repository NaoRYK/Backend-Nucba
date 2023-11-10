"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMultiplePokemon = exports.getSimplePokemonById = exports.getPokemonById = void 0;
const axios_1 = __importDefault(require("axios"));
const getPokemonById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { data } = yield axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    res.json({ data });
});
exports.getPokemonById = getPokemonById;
const getSimplePokemonById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { id } = req.params;
    const { data } = yield axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const { name, order, sprites, abilities, types } = data;
    const bestImg = (_a = sprites.other) === null || _a === void 0 ? void 0 : _a.dream_world.front_default;
    const simplePokemon = {
        name,
        order,
        bestImg,
        abilities,
        types
    };
    res.json({ simplePokemon });
});
exports.getSimplePokemonById = getSimplePokemonById;
const getMultiplePokemon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit = 5, offset = 0 } = req.query;
    const response = yield axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`);
    const pokemonDataURLs = response.data.results.map((pokemon) => {
        pokemon.url;
    });
    const finalPokemonData = yield Promise.all(pokemonDataURLs.map((url) => __awaiter(void 0, void 0, void 0, function* () {
        const pokemonData = yield axios_1.default.get(url);
        return pokemonData.data;
    })));
    res.json({
        finalPokemonData
    });
});
exports.getMultiplePokemon = getMultiplePokemon;
