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
exports.newBillPrompt = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
const newBillPrompt = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield inquirer_1.default.prompt([
        {
            type: "list",
            name: "billType",
            message: "Seleccione si es ingreso o egreso de dinero",
            choices: [
                {
                    name: "Ingreso",
                    value: "in"
                },
                {
                    name: "Egreso",
                    value: "out"
                },
            ]
        },
        {
            type: "number",
            name: "billAmount",
            message: "Ingresar cantidad de dinero"
        }
    ]);
});
exports.newBillPrompt = newBillPrompt;
