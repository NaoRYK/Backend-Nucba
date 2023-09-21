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
Object.defineProperty(exports, "__esModule", { value: true });
exports.billIndex = exports.totalOut = exports.totalIn = exports.createNewBill = exports.getAllBills = void 0;
const billsPrompt_1 = require("./billsPrompt");
const fsMethods_1 = require("./fsMethods");
const getAllBills = () => __awaiter(void 0, void 0, void 0, function* () {
    const billsData = yield (0, fsMethods_1.getBills)("gastos");
    console.log("Todos los gastos son:");
    console.log(billsData);
});
exports.getAllBills = getAllBills;
const createNewBill = () => __awaiter(void 0, void 0, void 0, function* () {
    const billPrompt = yield (0, billsPrompt_1.newBillPrompt)();
    const billsData = yield (0, fsMethods_1.getBills)("gastos");
    billsData.push(billPrompt);
    (0, fsMethods_1.createBill)("gastos", billsData);
});
exports.createNewBill = createNewBill;
const totalIn = () => __awaiter(void 0, void 0, void 0, function* () {
    const billsData = yield (0, fsMethods_1.getBills)("gastos");
    const filteredBills = billsData.filter(i => i.billType === "in");
    let totalInAmount = 0;
    filteredBills.map(i => {
        totalInAmount += i.billAmount;
    });
    console.log(`El ingreso total es de ${totalInAmount}.`);
});
exports.totalIn = totalIn;
const totalOut = () => __awaiter(void 0, void 0, void 0, function* () {
    const billsData = yield (0, fsMethods_1.getBills)("gastos");
    const filteredBills = billsData.filter(i => i.billType === "out");
    let totalInAmount = 0;
    filteredBills.map(i => {
        totalInAmount += i.billAmount;
    });
    console.log(`El ingreso total es de ${totalInAmount}.`);
});
exports.totalOut = totalOut;
const billIndex = () => __awaiter(void 0, void 0, void 0, function* () {
    const billsData = yield (0, fsMethods_1.getBills)("gastos");
    const filteredInBills = billsData.filter(i => i.billType === "in");
    let totalInAmount = 0;
    filteredInBills.map(i => {
        totalInAmount += i.billAmount;
    });
    const filteredOutBills = billsData.filter(i => i.billType === "out");
    let totalOutAmount = 0;
    filteredOutBills.map(i => {
        totalOutAmount += i.billAmount;
    });
    const billsDifference = totalInAmount - totalOutAmount;
    console.log(`Usted ha ${-billsDifference ? "Perdido" : "Ganado"} ${Math.abs(billsDifference)} pesos`);
});
exports.billIndex = billIndex;
