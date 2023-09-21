"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBill = exports.getBills = void 0;
const fs_1 = __importDefault(require("fs"));
const getBills = (file) => {
    return new Promise((resolve, reject) => {
        fs_1.default.readFile(file + ".json", "utf-8", (err, content) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(JSON.parse(content));
            }
        });
    });
};
exports.getBills = getBills;
const createBill = (file, content) => {
    return new Promise((resolve, reject) => {
        fs_1.default.writeFile(file + ".json", JSON.stringify(content), (err) => {
            err ? reject(err) : resolve(console.log("Gasto añadido correctamente"));
        });
    });
};
exports.createBill = createBill;
