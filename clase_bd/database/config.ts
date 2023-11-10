import mongoose from "mongoose";


export const connectDB = async():Promise<void> =>{
    try {
        await mongoose.connect("mongodb+srv://naoryk:Kad74LE8Vnpc6ys6@cluster0.uevhxqt.mongodb.net/")

        console.log("Base de datos online");
        
    } catch (error) {

        console.log(error);
        
        throw new Error("Error al inniciar base de dato")
    }
}