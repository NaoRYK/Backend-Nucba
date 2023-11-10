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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.getStudentsByDNI = exports.getStudents = exports.createStudent = void 0;
const student_1 = __importDefault(require("../models/student"));
const camada_1 = __importDefault(require("../models/camada"));
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const studentData = req.body;
    const { camada, dni, email, nombre } = studentData;
    const camadaData = yield camada_1.default.findOne({ nombre: camada });
    if (!dni || !nombre || !email || !camada) {
        res.json({
            msg: "Faltan datos necesarios en la peticion"
        });
        return;
    }
    if (!camadaData) {
        res.json({
            msg: "La camada no se encontró en la base de dados"
        });
        return;
    }
    const alumnoEnDB = yield student_1.default.findOne({ dni: dni });
    if (alumnoEnDB) {
        res.json({
            msg: "El DNI ya está registrado"
        });
        return;
    }
    const student = new student_1.default({
        dni,
        email,
        nombre,
        camada: camadaData === null || camadaData === void 0 ? void 0 : camadaData._id
    });
    yield student.save();
    res.json({
        msg: "todo ok",
        student
    });
});
exports.createStudent = createStudent;
const getStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const condicion = {
        estado: true
    };
    const students = yield student_1.default.find(condicion)
        .populate("camada", "nombre");
    res.json({
        students
    });
});
exports.getStudents = getStudents;
const getStudentsByDNI = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dni } = req.params;
    const student = yield student_1.default.findOne({ dni: dni })
        .populate("camada", "nombre");
    if (!student) {
        res.status(404).json({
            msg: "Usuario no encontrado"
        });
        return;
    }
    res.json({
        student
    });
});
exports.getStudentsByDNI = getStudentsByDNI;
const updateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dni } = req.params;
    const _a = req.body, { estado, curso } = _a, data = __rest(_a, ["estado", "curso"]);
    //Desestructuramos para sacar el estado y el curso, evitando que el usuario pueda editarlo
    const alumnoEnDB = yield student_1.default.findOne({ dni: dni });
    if (!alumnoEnDB) {
        res.json({
            msg: "El alumno no se encontró"
        });
        return;
    }
    const student = yield student_1.default.findOneAndUpdate({
        dni: dni
    }, data, { new: true });
    //Para que devuelva la data actualizada usamos el new:true
    res.json({
        student
    });
});
exports.updateStudent = updateStudent;
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dni } = req.params;
    const alumnoEnDB = yield student_1.default.findOne({ dni: dni });
    if (!alumnoEnDB) {
        res.json({
            msg: "El alumno no se encontró"
        });
        return;
    }
    //Soft delete
    const student = yield student_1.default.findOneAndUpdate({ dni: dni }, //Como voy a encontrar al objeto en la base de datos
    { estado: false }, //Lo que yo quiero cambiar
    { new: true } //(Opcional) Devuelve al estudiante antes de ser actualziado si esta en false, lo devuelve actualizado en true
    );
    //Hard delete
    //const student = await Student.findOneAndDelete({dni: dni})
    res.json({
        student
    });
});
exports.deleteStudent = deleteStudent;
