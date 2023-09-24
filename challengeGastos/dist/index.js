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
const inquirer_1 = __importDefault(require("inquirer"));
const listOptions_1 = require("./helpers/listOptions");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let run = true;
    //  while (run) {
    const action = yield inquirer_1.default.prompt([
        {
            type: "list",
            name: "listOptions",
            message: "Seleccione que desea hacer",
            choices: [
                {
                    value: 1,
                    name: "Leer gastos"
                },
                {
                    value: 2,
                    name: "Ingresar gastos"
                },
                {
                    value: 3,
                    name: "Mostrar total de ingresos"
                },
                {
                    value: 4,
                    name: "Mostrar total de egresos"
                },
                {
                    value: 5,
                    name: "Mostrar ganancias o perdidas"
                },
                {
                    value: 6,
                    name: "Crear 10 gastos aleatorios"
                },
                {
                    value: 99,
                    name: "Salir"
                },
            ]
        }
    ]);
    switch (action.listOptions) {
        case 1:
            //Todo logica cuando se queire leer
            (0, listOptions_1.getAllBills)();
            break;
        case 2:
            //Todo logica para ingresar
            (0, listOptions_1.createNewBill)();
            break;
        case 3:
            (0, listOptions_1.totalIn)();
            break;
        case 4:
            (0, listOptions_1.totalOut)();
            break;
        case 5:
            (0, listOptions_1.billIndex)();
            break;
        case 6:
            (0, listOptions_1.createRandomBills)();
            break;
        case 99:
            //Todo Logica para salir
            console.log("Gracias por usar el programa");
            run = false;
            break;
        default:
            console.log("Salir");
            break;
    }
    //  }
});
main();
