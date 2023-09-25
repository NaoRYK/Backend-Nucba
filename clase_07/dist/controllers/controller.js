"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newRouteController = exports.postController = exports.logController = void 0;
const logController = (req, res) => {
    const method = req.method;
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] Metodo ${method} fue ejececutado en el controlador log`);
    res.json({
        message: `Hola! desde el controlador`,
        method,
        timestamp
    });
};
exports.logController = logController;
const postController = (req, res) => {
    const method = req.method;
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] Metodo ${method} fue ejececutado en el controlador log`);
    const saludo = req.body.saludo;
    if (!saludo) {
        console.error(`[${timestamp}] no hay saludo`);
        res.status(400).json({
            error: "Campo faltante",
            message: 'Falta el campo "Saludo" en la solicitud',
        });
        return;
    }
    res.json({
        message: "Hola desde el postController",
        receivedCheer: saludo,
        method,
        timestamp
    });
};
exports.postController = postController;
const newRouteController = (req, res) => {
    const method = req.method;
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}], Método ${method} ejecutado en la nueva ruta`);
    res.json({
        message: "Hola de la nueva ruta",
        method,
        timestamp
    });
};
exports.newRouteController = newRouteController;
