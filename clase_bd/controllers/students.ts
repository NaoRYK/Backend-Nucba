import {Request,Response} from "express";
import Student, { ISstudent } from "../models/student";
import Camada from "../models/camada";

export const createStudent = async (req:Request,res:Response) =>{

    const studentData:ISstudent = req.body;

    const {camada,dni,email,nombre} = studentData;


    const camadaData = await Camada.findOne({nombre:camada});


    if(!dni || !nombre || !email || !camada){
        res.json({
            msg:"Faltan datos necesarios en la peticion"
        })
        return;
    }


    if(!camadaData){

        res.json({
            msg:"La camada no se encontró en la base de dados"
        })
        return;

    }

    const alumnoEnDB = await Student.findOne({dni:dni})


    if(alumnoEnDB){
        res.json({
            msg:"El DNI ya está registrado"
        })

        return;
    }
    const student = new Student({
        dni,
        email,
        nombre,
        camada: camadaData?._id
    });

    await student.save();

    res.json({
        msg:"todo ok",
        student
    })
}

export const getStudents = async (req:Request,res:Response) =>{

    const condicion = {
        estado:true
    }

    const students = await Student.find(condicion)
        .populate("camada", "nombre")

    res.json({
        students
    })
}
export const getStudentsByDNI = async (req:Request,res:Response) =>{


    const {dni} = req.params;


    const student: ISstudent | null = await Student.findOne({dni:dni})
    .populate("camada", "nombre")



    if(!student){
        res.status(404).json({
            msg:"Usuario no encontrado"
        })
        return;
    }
    res.json({
        student
    })
}

export const updateStudent = async (req:Request,res:Response) =>{

    const {dni} = req.params;

    const {estado,curso, ...data} = req.body;
//Desestructuramos para sacar el estado y el curso, evitando que el usuario pueda editarlo



const alumnoEnDB = await Student.findOne({dni:dni})

if(!alumnoEnDB){
    res.json({
        msg:"El alumno no se encontró"
    })

    return;
}


    const student = await Student.findOneAndUpdate({
        dni:dni
    },data, {new:true})
    //Para que devuelva la data actualizada usamos el new:true



    res.json({
        student
    })
}

export const deleteStudent = async (req:Request,res:Response) =>{

    const {dni} = req.params;

    const alumnoEnDB = await Student.findOne({dni:dni})

if(!alumnoEnDB){
    res.json({
        msg:"El alumno no se encontró"
    })

    return;
}


//Soft delete

    const student = await Student.findOneAndUpdate(
        {dni:dni}, //Como voy a encontrar al objeto en la base de datos
        {estado:false},//Lo que yo quiero cambiar
        {new:true} //(Opcional) Devuelve al estudiante antes de ser actualziado si esta en false, lo devuelve actualizado en true
        )

//Hard delete
    //const student = await Student.findOneAndDelete({dni: dni})

    res.json({
        student
    })
}