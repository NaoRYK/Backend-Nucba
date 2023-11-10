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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const objetoAGuardar = {
    id: 123,
    username: "LionelMessi",
    isAdmin: true,
};
const clave = "74nucbaneta";
const tokenFirmado = jsonwebtoken_1.default.sign(objetoAGuardar, clave);
const tokenFirmadoExpiracion = jsonwebtoken_1.default.sign(objetoAGuardar, clave, {
    expiresIn: "2m"
});
// console.log(tokenFirmado)
// console.log(tokenFirmadoExpiracion)
const generarJWT = (dataAGuardar) => {
    return new Promise((res, rej) => {
        jsonwebtoken_1.default.sign(dataAGuardar, clave, {
            expiresIn: "2m"
        }, (err, token) => {
            err ? rej("Se rompio Todo") : res(token);
        });
    });
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    const respuesta = yield generarJWT(objetoAGuardar);
    console.log(respuesta);
}))();
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJ1c2VybmFtZSI6Ikxpb25lbE1lc3NpIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjk4MDI0MDQ2LCJleHAiOjE2OTgxNDQwNDZ9.I9hBivv9PkRMiB7hHLLC3875u5DSrjFTOaS73Y2oZTA";
const dataVerificada = jsonwebtoken_1.default.verify(token, clave);
// console.log(dataVerificada);
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const contraseñaAEnctriptar = "Micontraseñasupersegura";
const contraseñaEnctripada = bcryptjs_1.default.hashSync(contraseñaAEnctriptar);
console.log("cONTRASE{A ENCRIPTADA");
console.log(contraseñaEnctripada);
