import { Model, ObjectId, Schema,model } from "mongoose";

export interface ISstudent{

    dni:number;
    nombre:string;
    camada:ObjectId;
    email:string;
    estado:boolean;
}

const StudentSchema = new Schema<ISstudent>({

    dni:{
        type:Number,
        required:true,
        unique:true,
    },
    nombre:{
        type:String,
        required:true,

    },
    camada:{
        type:Schema.Types.ObjectId,
        ref:"Camada",
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    estado:{
        type:Boolean,
        required:true,
        default:true
    }
});

const Student: Model<ISstudent> = model<ISstudent>("Student",StudentSchema);

export default Student;