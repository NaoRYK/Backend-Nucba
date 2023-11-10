"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 8080;
app.use(express_1.default.static("public"));
app.get("/", (req, res) => {
    res.status(200).send(`El estatus del home es 200`);
});
app.get("/pagDePrueba", (req, res) => {
    res.sendFile(__dirname + "/public/pagDePrueba.html");
});
app.get("/generic", (req, res) => {
    res.sendFile(__dirname + "/public/generic.html");
});
app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/404.html");
});
app.listen(PORT, () => {
    console.log(`Puerto corriendo en ${PORT}`);
});
// import http from "http";
// const PORT = 8080;
// const server = http.createServer( async (req,res) =>{
//     if(req.url === "/" && req.method === "GET"){
//         res.writeHead(200, { "Content-Type": "application/json"})
//         res.write(
//             JSON.stringify({
//             msg: "Hola! soy el home"
//         }))
//         res.end();
//         return
//     }
//     if(req.url === "/anidado" && req.method === "GET"){
//         res.writeHead(200, { "Content-Type": "application/json"})
//         res.write(
//             JSON.stringify({
//             msg: "Hola! soy el anidado"
//         }))
//         res.end();
//         return
//     }
//     if(req.url === "/" && req.method === "GET"){
//         res.writeHead(404, { "Content-Type": "application/json"})
//         res.write(
//             JSON.stringify({
//             msg: "Aca no hay nada"
//         }))
//         res.end();
//         return
//     }
// })
// server.listen(PORT,() =>{
//     console.log(`Server levantado corriendo en ${PORT}`);
// })
